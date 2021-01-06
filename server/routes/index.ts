import { Request, Response, Router } from 'express';

let router = Router();

//получить IP для сервера
router.get('/', async (req:Request, res:Response)=>{
    const data = {
        status: req.params.status || "BAD!!!!"
    }
    res.end(JSON.stringify(data));
});




export const ipRouter = router;