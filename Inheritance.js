// the recommended way of setting the prototype of an object is Object.create ( here is the documentation for that method.)
// Object.create very simply returns a new object with the specified prototype and any additional properties you want to add

function Person(name){
    this.name = name
}

Person.prototype.info = function(){
    return `my name is ${this.name}`
}

function Employee(name,position){
    this.name = name
    this.position = position
}


 Employee.prototype = Object.create(Person.prototype)
 //EighthGrader.prototype = Person.prototype (this will literally set Employee Person protype to Person prototype, not copy)

 const emp1 = new Employee('EmpX',"head")
 console.log(emp1.info())