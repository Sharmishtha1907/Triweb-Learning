// we use splice
let arr = [0,1,2,3,4,5,6,7,8,9]
arr.splice(1,4,'a','b','c','d');
console.log(arr);

let arr1 = [0,1,2,3,4,5,6,7,8,9]
arr1.splice(1,1,'a','b','c','d','e');
console.log(arr1);

//arr.splice(starting idx,ending ids,elements to add)

/* OUTPUT
[
  0, 'a', 'b', 'c', 'd',
  5, 6,   7,   8,   9
]
[
  0, 'a', 'b', 'c', 'd', 2,
  3, 4,   5,   6,   7,   8,
  9
]
*/
