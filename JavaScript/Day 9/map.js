//mapping array elements 

let arr=[0,1,2,3,4,5];

let sqar=arr.map((ele)=> ele*ele);
console.log(sqar);
let cube=arr.map((ele)=>ele*ele*ele);
console.log(cube);
let str=arr.map((ele)=> ele+" a");
console.log(str);

/* OUTPUT 
[ 0, 1, 4, 9, 16, 25 ]
[ 0, 1, 8, 27, 64, 125 ]
[ '0 a', '1 a', '2 a', '3 a', '4 a', '5 a' ]
*/