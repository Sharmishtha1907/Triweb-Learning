let arr = [1,2,3,4,5,6,7,8,9,10];

let odd = arr.filter((ele)=>ele%2!=0);
console.log("Odd elements : "+odd);
let even = arr.filter((ele)=>ele%2==0);
console.log("Even elemenets : "+even);

/* OUTPUT
Odd elements : 1,3,5,7,9
Even elemenets : 2,4,6,8,10
*/