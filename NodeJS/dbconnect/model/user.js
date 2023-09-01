const db=require('../util/database');

module.exports.insert=(userData)=>{
    console.log(userData);
    let query= "INSERT INTO `users`(`name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";
    let result=db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
    console.log(result);
}