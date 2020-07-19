// All objects in JavaScript have a prototype. Stated simply, the prototype is another object that the original object inherits from,
//  which is to say, the original object has access to all of its prototype’s methods and properties.

function Person(name){
    this.name = name
}

Person.prototype.info = function(){
    return `my name is ${this.name}`
}

const ram = new Person("Ram")
console.log(ram.info())
