// Question 1:
// What does the term "prototype" mean in JavaScript?

// Answer 1:
// In JavaScript, a prototype is an internal property of objects
// that serves as a blueprint for other objects. It allows objects
//to inherit properties and methods from other objects.

// Question 2:
// How can you create an object in JavaScript?

//Answer 2:
//In JavaScript, you can create objects using object literals, constructor functions,
// and the Object.create() method. For example:

// Using object literals
const person = {
  name: "Alice",
  age: 30,
};

// Using constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Bob", 25);

// Explanation:

// 1. Constructor Function:
//    The code defines a constructor function named Person. Constructor functions are special functions in JavaScript used to create objects with specific properties and methods.
// In this constructor function, name and age are parameters passed to the function.
// Inside the constructor function, this refers to the newly created object that will be instantiated using this constructor function.
// 2. Object Instantiation:
//    The new keyword is used to create a new instance of the Person object.
// When new Person('Bob', 25) is called:
// A new empty object is created.
// The Person function is called with the arguments 'Bob' and 25.
// Inside the Person function, this.name is set to 'Bob' and this.age is set to 25.
// The newly created object with the assigned properties is returned and stored in the variable person1.
// 3. Resulting Object:
//    After the object is created, person1 now holds an instance of the Person object with the name property set to 'Bob' and the age property set to 25

// Using Object.create()
const obj = Object.create(null);
obj.property = "value";
console.log(obj);
String.prototype.trueLength = function () {
  console.log(`String ${this} has ${this.length} words`);
};

//Question 3:
//How can you add properties and methods to an object in JavaScript?

//Answer 3:
//You can add properties and methods to an object in JavaScript using
//dot notation or square bracket notation. For example:

// Adding properties using dot notation
person.gender = "female";

// Adding properties using square bracket notation
person["address"] = "123 Main St";

// Adding methods
person.sayHello = function () {
  return `Hello, my name is ${this.name}.`;
};

//Question 5:
//What is the difference between own properties and inherited properties in JavaScript objects?

//Own properties are properties directly defined on an object, 
//while inherited properties are properties that an object inherits from its prototype. 
//The hasOwnProperty() method can be used to check if a property is an own property or an inherited property.

// Create a parent object with an inherited property
const parent = {
    inheritedProperty: 'I am inherited'
};

// Create a child object with its own property and inheriting from parent
const child = Object.create(parent);
child.ownProperty = 'I am own';

// Check if the properties are own properties or inherited properties
console.log(child.hasOwnProperty('ownProperty')); // Output: true (own property)
console.log(child.hasOwnProperty('inheritedProperty')); // Output: false (inherited property)


Array.prototype.trueLength = function () {
  console.log("This is array");
};

let myName = "Saksham";
let myCity = "Gwalior";
let myCountry = "India";
let myArr = [1, 2, 3, 4];

myName.trueLength();
myCity.trueLength();
myCountry.trueLength();
myArr.trueLength();
