import express, { Request, Response } from "express";
import {ipRouter} from "./routes";
import { URL } from 'url';
require('dotenv').config();

const dev = process.env.NODE_ENV !== "production";
const full_build = process.env.NODE_SERV !== "only_server";
let app, handle = null;

if(full_build){
  app = require("next")({dev});
  handle = app.getRequestHandler();
}
if(!process.env.HOST1 || !process.env.HOST2){
  throw new Error("no ENV: HOST1 or HOST2");
}
const host1 = new URL(process.env.HOST1)
const host2 = new URL(process.env.HOST2)
const port1 = host1.port;
const port2 = host2.port;
if(!port1 || !port2){
  throw new Error("wrong! ENV: HOST1 or HOST2");
}
const api_server_port = full_build ? port1 : port2;

(async () => {
  try {
    if(full_build){
      await app.prepare();
    }
    const server = express();

    server.use('/api', ipRouter);
    if(full_build){
      server.all("*", (req: Request, res: Response) => {
        return handle(req, res);
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
})();
