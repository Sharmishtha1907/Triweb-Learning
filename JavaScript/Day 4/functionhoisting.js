console.log(printNum3);
console.log(printNum3());
function printNum3(){
    return 3;
}
console.log(printNum3());

console.log(printNum2);

var printNum2 = function(){
    return 2;
}
console.log(printNum2);
console.log(printNum2());

const printNum1 = function(){
    return 1;
}
console.log(printNum1);
console.log(printNum1());

/* OUTPUT 
[Function: printNum3]
3
3
undefined
[Function: printNum2]
2
[Function: printNum1]
1
*/
