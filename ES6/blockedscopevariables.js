// hoisting is removed for block scope variables
let x;
{
    var n=6;
    x=4;
    let y=3;
}
console.log("n : ",n);
console.log("x : ",x);
//console.log("y : ",y);// y is not defined

/* OUTPUT
n :  6
x :  4
*/