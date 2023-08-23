let name1 = {name:"hi"}
m = {[name1]:"Sharmishtha"}
name1 = "My Name"
name2 = {name:"Shanu"}
console.log(m[name2]);
console.log(m);

let weakMap = new WeakMap()
obj1 = {}
obj2 = {1:1}
obj3 = {2:2}
weakMap.set(obj1,"val1")
weakMap.set(obj2,"val2")
weakMap.set(obj3,"val3")
console.log(weakMap);
let v1 = weakMap.get(obj1);
console.log(v1)

//if the object is not refrenced it is considered as garbage

/* OUTPUT
Sharmishtha
{ '[object Object]': 'Sharmishtha' }
WeakMap { <items unknown> }
val1
*/