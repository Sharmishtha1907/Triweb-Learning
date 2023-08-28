function validate(name){
    return new Promise((resolve,reject)=>{
        if(name!=""){
            resolve("Success");
        }
        else{
            reject("Failed");
        }
    });
    // resolve->success case
    //reject->failed case
    
}

validate("Shanu")
  .then((result)=>{
    console.log("Event ended now then will execute");
    console.log(result);
  })
  .catch((error)=>{
    console.log("Event ended now catch will execute");
    console.log(error);
   });
   
validate("")
  .then((result)=>{
    console.log("Event ended now then will execute");
    console.log(result);
  })
  .catch((error)=>{
    console.log("Event ended now catch will execute");
    console.log(error);
   });
   
   
console.log("Event ended");

/* OUTPUT
Event ended
Event ended now then will execute
Success
Event ended now catch will execute
Failed
*/