//Spread operator 
//Array 
let arr=[1,2,3,4,5];
let arr2=[6,7,8];

let m1=[...arr,...arr2];
console.log(m1);

//Object
let obj1={name:"Shanu",age:21};
let obj2=obj1;
console.log("Before: ");
console.log("Obj1 : ",obj1);
console.log("Obj2 : ",obj2);
obj2.name="Shivansh";
console.log("After Updating obj2 ");
console.log("Obj1 : ",obj1);
console.log("Obj2 : ",obj2);
//both obj1 and obj2 changed because objects do not get copied they get referenced

let obj3={name:"Shanu",age:21};
let obj4={...obj3,city:"Lucknow"};
console.log("Before: ");
console.log("Obj3 : ",obj3);
console.log("Obj4 : ",obj4);
obj4.name="Shivansh";
console.log("After Updating obj2 ");
console.log("Obj3 : ",obj3);
console.log("Obj4 : ",obj4);

/* OUTPUT
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
Before: 
Obj1 :  { name: 'Shanu', age: 21 }
Obj2 :  { name: 'Shanu', age: 21 }
After Updating obj2 
Obj1 :  { name: 'Shivansh', age: 21 }
Obj2 :  { name: 'Shivansh', age: 21 }
Before: 
Obj3 :  { name: 'Shanu', age: 21 }
Obj4 :  { name: 'Shanu', age: 21, city: 'Lucknow' }
After Updating obj2 
Obj3 :  { name: 'Shanu', age: 21 }
Obj4 :  { name: 'Shivansh', age: 21, city: 'Lucknow' }
*/