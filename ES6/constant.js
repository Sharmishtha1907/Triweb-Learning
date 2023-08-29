const a=5;
console.log(a);

//a=7 //immutable 

const obj={name:"shanu",age:21};
console.log("Before : ",obj);
//obj={name:"SHANU",age:18};
//console.log("Now : ",obj); 

//TO CHANGE THE CONTENT WE NEED TO CHANGE THE OBJECT

obj.name="Shivansh";
obj.age=13;
console.log("Now : ",obj); 

/* OUTPUT
5
Before :  { name: 'shanu', age: 21 }
Now :  { name: 'Shivansh', age: 13 }
*/