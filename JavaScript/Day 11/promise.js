 // A promise is an object representing  the completion or failure of an asynchronous operation.

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
    console.log(result);
  })
  .catch((error)=>{
    console.log(error);
   });
   
validate("")
  .then((result)=>{
    console.log(result);
  })
  .catch((error)=>{
    console.log(error);
   });


/* OUTPUT 
Success
Failed
*/