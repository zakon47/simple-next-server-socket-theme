import { Request, Response, Router } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {KEY_JWK, requireAuth, userDB} from "../middleware/jwt";

let router = Router();



router.get('/test', requireAuth, async (req:Request, res:Response)=>{
    res.status(200).json({
        status: "вы в системе"
    })
});

/*
Авторизация под пользователем
 */
router.post('/signin', async (req:Request, res:Response)=>{
    const email = ""+req.body.email;
    const password = ""+req.body.password;
    if(email === undefined || password === undefined){
        res.status(404).json({
            msg: "вы передали не все данные"
        })
        return;
    }
    //поиск нужного пользователя
    if(userDB.email != email){
        res.status(404).json({
            msg: "такого пользователя нету"
        })
    }
    //проверяем - тот ли пароль что в БД для этого пользователя
    const compare = await bcryptjs.compareSync(password, userDB.pw)
    if(compare){
        const token = jwt.sign({
            email, zak: true
        }, KEY_JWK, {
            expiresIn: 60*60
        })
        res.status(200).end(`Bearer ${token}`);
    }else{
        res.status(401).json({
            msg: "не верный пароль или логин!"
        })
    }
});

/*
Регистрация нового польозователя
 */
router.post('/signup', async (req:Request, res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password){
        res.status(401).json({
            msg: "this user is busy"
        })
    }
    //проверка на дубль пользователя

    //регаем пользоваетля
    const salt = bcryptjs.genSaltSync(10)
    const pw = bcryptjs.hashSync(password, salt)

    if(true){
        res.status(201).json({
            ...userDB
        })
    }else {
        res.status(500).json({
            err: true
        })
    }
});




export const authRouter = router;