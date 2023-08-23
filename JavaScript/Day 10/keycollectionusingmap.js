let mapp = new Map()
mapp.set("name","Sharmishtha")

console.log(mapp);

mapp.set("address","Lucknow");
console.log(mapp);

mapp.set("mobile",1122334455)
console.log(mapp);

console.log("Number of Elements in Map = ",mapp.size);

const Name = mapp.get('name');
console.log("Name from Map is ",Name);

mapp.set(1,"First");
console.log(mapp);

let val1 = mapp.get(1);
console.log("Val of 1 is ",val1);

/* OUTPUT
Map(1) { 'name' => 'Sharmishtha' }
Map(2) { 'name' => 'Sharmishtha', 'address' => 'Lucknow' }
Map(3) {
  'name' => 'Sharmishtha',
  'address' => 'Lucknow',
  'mobile' => 1122334455
}
Number of Elements in Map =  3
Name from Map is  Sharmishtha
Map(4) {
  'name' => 'Sharmishtha',
  'address' => 'Lucknow',
  'mobile' => 1122334455,
  1 => 'First'
}
Val of 1 is  First
*/