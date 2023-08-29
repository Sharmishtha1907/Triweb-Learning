//Deep Matching ->object in object
function getstu() {
  let obj = {
    name: "shanu",
    age: 21,
    cls: "12G",
    location: {
      city: "lucknow",
    },
  };
  return obj;
}
console.log(getstu());
let {
  name: Stuname,
  age: years,
  cls: clss,
  location: { city: stucity },
} = getstu();
console.log("Name : ", Stuname);
console.log("Age : ", years);
console.log("Class : ", clss);
console.log("Location : ", stucity);

/*OUTPUT
 name: 'shanu', age: 21, cls: '12G', location: { city: 'lucknow' } }
Name :  shanu
Age :  21
Class :  12G
Location :  lucknow
    */
