import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from "express";

export const userDB = {
    email: "zak@gmail.com",
    pw: "$2a$10$uHM4KW8Na59m7x7.iXkFNOol6wmwzMZI.kEhtEXmQfKUrETtGBwX2" //"9608"
}
export const KEY_JWK = "2222"


export function requireAuth(req:Request, res:Response, next: NextFunction) {
    if(!req.headers.authorization){
        res.status(401).end("Unauthorized")
        return
    }else{
        const tag = 'Bearer ';
        const token = req.headers.authorization.substring(tag.length);
        //проверка на валидность токена
        try {
            const valid = jwt.verify(token, KEY_JWK);
            console.log('valid',valid)
            if(valid){
                console.log('token',token)
                next()
            }else{
                res.status(401).end("Unauthorized")
                return
            }
        }catch (e) {
            res.status(401).end(e.message)
            return
        }
    }
}