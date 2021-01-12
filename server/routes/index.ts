import { Request, Response, Router } from 'express';
import { maps } from '../../test/test';

let router = Router();

//получить IP для сервера
router.get('/', async (req:Request, res:Response)=>{
    if(maps['server']===undefined){
        maps['server'] = 0;
    }else{
        maps['server'] += 1;
    }
    console.log(111, maps)
    res.end(JSON.stringify({status: "OK"}));
});




export const testRouter = router;