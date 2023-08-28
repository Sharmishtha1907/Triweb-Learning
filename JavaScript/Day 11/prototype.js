function Employee(dep,mob){
    this.department = dep;
    this.mobile = mob;
}

function Manager(name){
    Employee.call(this);//this and call are used together to make the employee object part of manager object
    this.name = name;
}
Manager.prototype= Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
let Shanu = new Manager("Shanu");
console.log(Shanu);
console.log(Shanu.__proto__);
console.log(Shanu.__proto__.__proto__);//{} because it is not inheriting any other class


/* OUTPUT
Manager { department: undefined, mobile: undefined, name: 'Shanu' }
Employee { constructor: [Function: Manager] }
{}
*/