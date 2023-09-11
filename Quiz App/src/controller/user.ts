import { Request,Response,NextFunction} from "express";

import user from '../model/user';

const registerUser=(req:Request,res:Response,next:NextFunction)=>{
    const User = new user(req.body);
    User.save();
    res.send("registeration done");
}

export {registerUser};