function returnUser(){
    return new Promise((resolve, reject)=>{
        resolve({name:"Bryce"})
    });
}

returnUser()
    .then((userData)=>{
        return userData.name;
    })
    .then((userName)=>{
        console.log("Hello ",userName);
    })
    .catch((err)=>{
        console.log(err);
    })


/* OUTPUT
Hello Bryce
*/