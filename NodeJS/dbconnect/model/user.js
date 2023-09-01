const db=require('../util/database');

module.exports.insert=async(userData)=>{
    let id=0;
    try{
    let query= "INSERT INTO `users`(`name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";
    let result= await db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
    id=result[0].insertId;
    console.log(result[0].insertId);
    }
    catch(error){
        console.log(error);
        return false;
    }
    return id;
}

module.exports.get=async (userData)=>{
    let data='';
 try {
    let query="SELECT * FROM users WHERE id=(?)";
    let result=await db.execute(query,[userData.id]);
    data=result[0][0];
    console.log(result);
} catch (error) {
    console.log(error);
     return false;
}
return data;
}

module.exports.update=async (userData)=>{
 try {
    let query="UPDATE `users` SET `password`=? WHERE id=?";
    let result=await db.execute(query,[userData.password,userData.id]);
    console.log(true);
} catch (error) {
    console.log(error);
     return false;
}
return true;
}

module.exports.delete=async (userData)=>{
    try {
       let query="DELETE FROM `users` WHERE id=?";
       let result=await db.execute(query,[userData.id]);
       console.log(true);
   } catch (error) {
       console.log(error);
        return false;
   }
   return true;
   }

