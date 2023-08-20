if(true){
    let x = 4;
    console.log(x);
}
//OUTPUT : 4

let a=7;
let b=8;
if(a>b){
    console.log(a);
}
else{
    console.log(b);
}

//OUTPUT : 8

if(false){
    console.log("You are in false block");
}
else{
    console.log("Flase block didn't run");
}

//OUTPUT : Flase block didn't run

let x;
if(x){
    console.log("Control in true block");
}
else{
    console.log("Control in else block");
}

//OUTPUT : Control in else block

if(null){
    console.log("Control in true block");
}
else{
    console.log("Control in else block");
}

//OUTPUT : Control in else block

if(0){
    console.log("Control in true block");
}
else{
    console.log("Control in else block");
}

//OUTPUT : Control in else block

if(NaN){
    console.log("Control in true block");
}
else{
    console.log("Control in else block");
}

//OUTPUT : Control in else block

if(""){
    console.log("Control in true block");
}
else{
    console.log("Control in else block");
}

//OUTPUT : Control in else block

if(NaN == false){
    console.log("Control in true block");
}
else{
    console.log("Control in else block");
}

//OUTPUT : Control in else block

if(NaN === false){
    console.log("Control in true block");
}
else{
    console.log("Control in else block");
}

//OUTPUT : Control in else block

if(0 === false){
    console.log("Control in true block");
}
else{
    console.log("Control in else block");
}

//OUTPUT : Control in else block

/* FINAL OUTPUT
4
8
Flase block didn't run
Control in else block
Control in else block
Control in else block
Control in else block
Control in else block
Control in else block
Control in else block
Control in else block
*/
