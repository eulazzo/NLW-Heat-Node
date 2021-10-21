import {Request,Response} from 'express';
import { GetLast3MessegesService } from '../services/GetLast3MessegesService';
 

 
class GetLast3MessagesController {
  async handle(req:Request,res:Response){
  
    const service =  new GetLast3MessegesService()
    const result = await service.execute()
    return res.json(result)
  }
}

export {GetLast3MessagesController}