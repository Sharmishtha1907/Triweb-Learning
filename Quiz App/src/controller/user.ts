import { Request,Response,NextFunction} from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import user from '../model/user';

interface ReturnResponse{
    status:"success"|"error",
    message:String,
    data:{}
}


const registerUser= async (req:Request,res:Response,next:NextFunction)=>{

    let resp:ReturnResponse;
    try{
    const email=req.body.email;
    const name=req.body.name;
    let password= await bcrypt.hash(req.body.password,12);
    
    const User = new user({email,name,password});
    const result=await User.save();
    if(!result){
        resp={status:"error",message:"No result found",data:{}};
        res.send(resp);
    }
    else{
        resp={status:"success",message:"Registeration done",data:{userId:result._id}};
    res.send(resp);
    }
    }catch(error){
        resp={status:"error",message:"No result found",data:{}};
        res.status(500).send(resp);
    }
}

const loginUser = async (req:Request,res:Response)=>{
    let resp:ReturnResponse;
    try{
    const email=req.body.email;
    const password=req.body.password;
    //find user
    const User = await user.findOne({email});
    
    if(User){
        //res.send(resp);
        const status = await bcrypt.compare(password,User.password);
        if(status)
        {
            const token= jwt.sign({userId:User._id},"secretkey",{expiresIn:'1h'});
            resp={status:"success",message:"Login Successful! :)",data:{token:token}};
            res.send(resp);
        }
        else{
            resp={status:"success",message:"Login Unsuccessful! :(",data:{}};
            res.send(resp);
        }
    }
    else{
        resp={status:"error",message:"Invalid Login",data:{}};
        res.status(401).send(resp);
    }
    }
    catch (error){
        resp={status:"error",message:"No result found",data:{}};
        res.status(500).send(resp);
    }

}

const getUser=async(req:Request,res:Response)=>{
  let resp:ReturnResponse;
  try{
   const userID=req.params.userId;
   const User=await user.findById(userID,{name:1,email:1});
   if(!User){
    resp={status:"error",message:"No result found",data:{}};
    res.send(resp);
   }
   else{
    resp={status:"success",message:"User Found",data:{user:User}};
    res.send(resp);
   }
  } catch (error){
    resp={status:"error",message:"No result found",data:{}};
    res.status(500).send(resp);
  }
}

const updateUser=async (req:Request,res:Response)=>{
    let resp:ReturnResponse;
    try{
    const userID= req.body._id;
    const User= await user.findById(userID);
    if(!User){
        resp={status:"error",message:"No result found",data:{}};
        res.send(resp);
    }
    else{
      User.name =req.body.name;
      await User.save();
       resp={status:"success",message:"User Data Updated",data:{}};
        res.send(resp);
    }
  } catch (error){
    resp={status:"error",message:"No result found",data:{}};
    res.status(500).send(resp);
  }

}



export {registerUser,getUser,updateUser,loginUser};