let arr = [0,1,2,3,4,5,6,7,8,9];

let arrnew = arr.splice(1,5);

console.log(arr);

console.log("Array after splicing :",arrnew);

//original array is divided into two parts
//arr = [0,6,7,8,9]
//arrnew = [1,2,3,4,5]