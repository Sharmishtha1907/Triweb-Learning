//Template Literals
let name="Shanu";
let age = 21;
function printt(name,age){
let toprint =`My Name is ${name} 
and my age is ${age}`;
console.log(toprint);
}
printt(name,age);

//Custom interpolation

function func(string,name,age){
    console.log("String : ",string);
    console.log("Name : ",name);
    console.log("Age : ",age);
}
func("My Name is ` ` and my age is ` `.",name,age);
func`My Name is ${name} and my age is ${age}`

//Raw String
let str=`age is \n ${21}`;
console.log(str==`age is \n 21`);
console.log(str==`age is \\n 21`);
console.log(String.raw`age is \n ${21}` == `age is \\n 21`);

/* OUTPUT
My Name is Shanu 
and my age is 21
String :  My Name is ` ` and my age is ` `.
Name :  Shanu
Age :  21
String :  [ 'My Name is ', ' and my age is ', '' ]
Name :  Shanu
Age :  21
true
false
true
*/