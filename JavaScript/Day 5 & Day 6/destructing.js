let arr = [1,2,3,4,5];

let num0 = arr[0];
let num1 = arr[1];
let num2 = arr[2];
let num3 = arr[3];
let num4 = arr[4];

console.log(num0," ",num1," ",num2," ",num3," ",num4);
//1 2 3 4 5
const [ele1,ele2,ele3,ele4,ele5] = arr;//destructing->unwrapping elements
console.log(ele1," ",ele2," ",ele3," ",ele4," ",ele5);
//1 2 3 4 5
const [ele0,ele00] = arr;
console.log(ele0," ",ele00);
//1 2

/* OUTPUT
1 2 3 4 5
1 2 3 4 5
1 2
*/