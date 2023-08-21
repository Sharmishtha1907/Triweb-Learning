// call by reference 
function updateAGE(person){
    person.age = person.age+1;
}

let obj = {name: "Shanu",age : 20};
console.log("Old Object : ",obj);
updateAGE(obj);
console.log("New Object : ",obj);

/* OUTPUT 
Old Object :  { name: 'Shanu', age: 20 }
New Object :  { name: 'Shanu', age: 21 }
*/