let arr = [1,3,4,5,6];
let some = arr.some((ele)=>ele%2==0);
console.log(some);
// some() returns true even if one element is present  

let arr11 = [1,3,5,7,9];
let every1 = arr11.every((ele)=> ele%2 != 0);
console.log(every1);
// every() returns true only if all elements is present 

let arr1 = [1,3,4,7,9];
let every2 = arr1.every((ele)=> ele%2 != 0);
console.log(every2);
//else it returns false

/* OUTPUT
true
true
false
*/