import { Request,Response,NextFunction} from "express";

import user from '../model/user';

interface ReturnResponse{
    status:"success"|"error",
    message:String,
    data:{}
}


const registerUser= async (req:Request,res:Response,next:NextFunction)=>{

    let resp:ReturnResponse;
    try{
    const User = new user(req.body);
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

export {registerUser,getUser,updateUser};