

const addUSerToDB=(uname:string,pass:string,age:number)=>{
   console.log(uname,pass,age);
   return "Registeration Complete";
}

interface User{
   id:number,
   uname:string,
   password:string,
   age:number,
}
const UpdateUserData=(objUser:User)=>{
   console.log(objUser.uname);
   return "Update Complete";
}

export {addUSerToDB,UpdateUserData};