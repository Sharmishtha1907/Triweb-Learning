import {Request,Response} from 'express';
import {addUSerToDB,UpdateUserData} from '../models/user';

const register=(req:Request,res:Response)=>{
    const uname:string="Shanu";
    const pass:string="Pass";
    const age=21;
    const result=addUSerToDB(uname,pass,age);
    res.send(result);
}

const UpdateUser = (req:Request,res:Response)=>{
    const result=UpdateUserData(req.body);
    res.send(result);
}

export {register,UpdateUser};