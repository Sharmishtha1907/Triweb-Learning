const userModel=require('../model/user');


module.exports.register =async (req,res)=>{
   let insertId= await userModel.insert(req.body);
    console.log("ID : ",insertId);
    if(insertId>0){
    res.send({status:"success",data:{id:insertId}});
    }
    else{
        res.send({status:"error",message:"User registration failed"});  
    }
}

module.exports.get = async (req,res)=>{
    let data= await userModel.get(req.body);
    if(data){
    res.send({status:"success",data:data});
    }
    else{
        res.send({status:"error",message:"User does not exist"});  
    }
}

module.exports.update = async (req,res)=>{
    let data= await userModel.update(req.body);
    if(data){
    res.send({status:"success",message:"Password updated"});
    }
    else{
        res.send({status:"error",message:"User does not exist"});  
    }
}

module.exports.delete =async (req,res)=>{
    let data= await userModel.delete(req.body);
    if(data){
    res.send({status:"success",message:"Row Deleted"});
    }
    else{
        res.send({status:"error",message:"User does not exist"});  
    }
}
