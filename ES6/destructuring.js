//Array Matching
let arr=[1,2,3,4];
let [a,b]=arr;
console.log("Array : ",arr);
console.log("a : ",a);
console.log("b : ",b);
[b,a]=[a,b];
console.log("After swapping : ");
console.log("a : ",a);
console.log("b : ",b);

//Object Matching 
function getstu(){
let obj={name:"shanu",age:21,cls:"12G"};
return obj;
}
console.log(getstu());
let {name,age,cls}=getstu();
console.log("Name : ",name);
console.log("Age : ",age);
console.log("Class : ",cls);

/*OUTPUT
Array :  [ 1, 2, 3, 4 ]
a :  1
b :  2
After swapping : 
a :  2
b :  1
{ name: 'shanu', age: 21, cls: '12G' }
Name :  shanu
Age :  21
Class :  12G
*/
