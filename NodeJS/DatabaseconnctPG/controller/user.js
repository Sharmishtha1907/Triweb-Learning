const userModel=require('../model/user');


module.exports.register =async (req,res)=>{
    try{
    console.log(req.body);
    let result= await userModel.create(req.body);
    console.log("Result : ",result.dataValues.id);
    res.send({status:"success",data:{id:result.dataValues.id}});
    }
    catch(error){
        res.send({status:"error",message:"User registration failed"});  
    }
}

module.exports.get = async (req,res)=>{
    try{
    let data= await userModel.findByPk(req.body.id);
    res.send({status:"success",data:data});
    }
    catch(error){
        res.send({status:"error",message:"User does not exist"});  
    }
}

module.exports.update = async (req,res)=>{
    try{
    let user= await userModel.findByPk(req.body.id);
    user.password=req.body.password;
    await user.save();
    res.send({status:"success",message:"Password updated"});
    }
    catch(error){
        res.send({status:"error",message:"User does not exist"});  
    }
}

module.exports.delete =async (req,res)=>{
    try{
    let user= await userModel.findByPk(req.body.id);
    user.password=req.body.password;
    await user.destroy();
    res.send({status:"success",message:"Row Deleted"});
    }
    catch(error){
        res.send({status:"error",message:"User does not exist"});  
    }
}
