import { Request, Response, Router } from 'express';

let router = Router();

//получить IP для сервера
router.get('/', async (req:Request, res:Response)=>{
    res.end(JSON.stringify({status: "OK"}));
});




export const testRouter = router;