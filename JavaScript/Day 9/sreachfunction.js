let regex = /\w/g // g stands for global and searches all over the string

let regexx = /[^\w\s]/g;

let str = 'Hello my name is Sharmishtha Shukla. I am 21 year old.';

let residx = str.search(regex);
console.log(residx);
console.log(str[residx]);


let residxx = str.search(regexx);
console.log(residxx);
console.log(str[residxx]);

/* OUTPUT
0
H
35
.
*/