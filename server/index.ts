import express, {NextFunction, Request, Response} from "express";
import {URL} from 'url';
import pageErrors from 'http-errors';
import {testRouter} from "./routes";
import {authRouter} from "./routes/auth";
import {Server as ServerHTTP} from "http";
import * as http from "http";
import {Server} from 'socket.io';
import {serverSocket} from "./socket";
import multer from 'multer';
import {ENV} from "../shared/const";
const upload = multer({ dest: './server/uploads/' })         //папка куда будем загружать файлы

const DEV = ENV.IS_DEV;
const SPLIT_SERVER = ENV.IS_SPLIT_SERVER;       //сервер раздвоен?
let app, handle = null;

if (!SPLIT_SERVER) {
    app = require("next")({DEV});
    handle = app.getRequestHandler();
}

const host1 = new URL(ENV.HOST1)
const host2 = new URL(ENV.HOST2)
const port1 = host1.port;
const port2 = host2.port;
if (!port1 || !port2) {
    throw new Error("wrong! ENV: HOST1 or HOST2");
}
const api_server_port = SPLIT_SERVER ? port2 : port1;


export let SOCKET:Server;

//запуск сервиса
(async (SOCKET) => {
    try {
        if (!SPLIT_SERVER) {
            await app.prepare();
        }
        const server = express();

        const serverHTTP: ServerHTTP = http.createServer(app);
        SOCKET = require('socket.io')(serverHTTP, {
          cors: {
            origin: '*',
          }
        }) as Server;

        //Sockets
        SOCKET.on('connection', serverSocket);

        //EXPRESS
        server.use(express.urlencoded({ extended: false }))
        server.use(express.json())
        server.use(upload.none())
        server.use('/api', testRouter);
        server.use('/api/auth', authRouter);

        if (!SPLIT_SERVER) {
            server.all("*", (req: Request, res: Response) => {
                return handle(req, res);
            });
        }else{
            //замыкающий обработчик - если другие middleware не перехватили
            server.use((req: Request, res: Response, next: NextFunction) => {
                //передаем параметр == вызываем ошибку
                next(new pageErrors.NotExtended());
            });
            //обрабатываем ошибку
            server.use((err:any, req: Request, res: Response, next: NextFunction) => {
                res.status(err.status || 500);
                res.send( 'Error on server! 500')
            });
        }

        server.listen(api_server_port, (err?: any) => {
            if (err) throw err;
            console.log(`API-SERVER: http://localhost:${api_server_port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})(SOCKET);
