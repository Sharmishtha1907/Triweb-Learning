//Extended Parameter Handling

//1 Default Parameter Values
function addtwonum(n1,n2=8){
    return n1 + n2;
}
console.log(addtwonum(1,7));

console.log(addtwonum(2)); // Output -> NaN (without default parameter)

function addNum(num1,num2){
    return num1+num2;
}
console.log(addNum(8,8));

function sumofall(...num){
    let sum=0;
    num.forEach((ele)=>{
       sum= sum+ele;
    })
    return sum;
}
console.log(sumofall(1,2,3,4,5));

function printall(num1,num2,...num){
    console.log("num 1 : ",num1);
    console.log("num 2 : ",num2);
    console.log("REST : ",num);
    }
printall(1,2,3,4,5,6,7,8,9,10);

/* OUTPUT
8
10
16
15
num 1 :  1
num 2 :  2
REST :  [
  3, 4, 5,  6,
  7, 8, 9, 10
]
*/
