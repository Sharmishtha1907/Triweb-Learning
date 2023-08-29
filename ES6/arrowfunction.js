function xyz(){
    console.log("xyz : ",this);
}
xyz();
//
const abc=()=>{
    console.log("abc : ",this);
}
abc();
/*
arrow function do not have their own this 
Therefore :
We cannot use them as constructor 
It does not have arguement
It does not have new.target
*/

/* 
Advantage of arrow function :
Easy syntax
Can be used in expression bodies
*/

let arr = [1,2,3,4,5];

const armap = arr.map(function(ele){
    return ele*2;
});
console.log(armap);

const arrow=arr.map(ele=>ele*2);
console.log(arrow);

/*
const obj = (uname,age)=>{
    return {name:uname,age:age};
}
*/
const obj = (uname,age)=>({name:uname,age:age});
console.log(obj("Shanu",21));

const addnum=(num1,num2)=>(num1+num2);
console.log(addnum(3,12));

arr.forEach((e)=>console.log("Square of ",e," : ", e*e));

/* OUTPUT
xyz :  <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 47.5510169994086,
      nodeStart: 1.7979600001126528,
      v8Start: 5.214060000143945,
      bootstrapComplete: 35.37453799974173,
      environment: 15.756218999624252,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1693296811696.758
  },
  fetch: [AsyncFunction: fetch]
}
abc :  {}
[ 2, 4, 6, 8, 10 ]
[ 2, 4, 6, 8, 10 ]
{ name: 'Shanu', age: 21 }
15
Square of  1  :  1
Square of  2  :  4
Square of  3  :  9
Square of  4  :  16
Square of  5  :  25
*/