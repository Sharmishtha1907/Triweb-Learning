//Property Shorthand 
let name="Shanu";
let age= 21 ;
let obj={name,age};
console.log(obj);

//Computed property name
let key="key_num_";
let obj2={
    name:"Shanu",[key]:"added"
}
console.log(obj2);

let obj3={
    name:"Shanu",[key+2]:"added"
}
console.log(obj3);

function func(){
    return 1;
}
let obj4={
    name:"Shanu",[key+2+func()]:"added"
}
console.log(obj4);

//Method Shorthand
let obj5={
    dem(){
        return "Method created";
    }
}
console.log(obj5.dem());

/*OUTPUT
{ name: 'Shanu', age: 21 }
{ name: 'Shanu', key_num_: 'added' }
{ name: 'Shanu', key_num_2: 'added' }
{ name: 'Shanu', key_num_21: 'added' }
Method created
*/

