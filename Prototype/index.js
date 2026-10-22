// =======================================================
// PROTOTYPE & PROTOTYPAL INHERITANCE: DEEP DIVE
// =======================================================

/**
 * 3 Crucial Concepts:
 * 1. prototype: Property on constructor functions/classes that gets assigned as the [[Prototype]]
 *    of instances created with 'new'.
 * 2. __proto__: Accessor property exposing the internal [[Prototype]] of an object (Object.getPrototypeOf is modern standard).
 * 3. Prototype Chain: Property lookup continues up the chain until it finds the property or hits Object.prototype.__proto__ (null).
 */

// -------------------------------------------------------------
// 1. Classical Prototypal Inheritance in ES5
// -------------------------------------------------------------
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

function Dog(name, breed) {
  // Call super constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Inherit Animal's prototype methods
Dog.prototype = Object.create(Animal.prototype);
// Crucial step: Restore constructor pointer!
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks loudly!`;
};

const d = new Dog("Buddy", "Golden Retriever");
console.log(d.speak()); // "Buddy makes a noise."
console.log(d.bark());  // "Buddy barks loudly!"
console.log("instanceof checks:");
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true
console.log(d instanceof Object); // true

// -------------------------------------------------------------
// 2. ES6 Class Equivalent (Syntactic Sugar over Prototype)
// -------------------------------------------------------------
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    return `${this.brand} is driving.`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  getDetails() {
    return `${this.brand} ${this.model}`;
  }
}

const myCar = new Car("Tesla", "Model 3");
console.log(myCar.drive());
console.log(myCar.getDetails());

// Proof that ES6 class is still prototypal:
console.log(typeof Car); // "function"
console.log(Car.prototype.drive === Vehicle.prototype.drive); // false, inherited via chain
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype); // true!

// -------------------------------------------------------------
// 3. Object with NULL prototype (Defense against Prototype Pollution)
// -------------------------------------------------------------
const pureDict = Object.create(null);
console.log("pureDict.__proto__ is:", Object.getPrototypeOf(pureDict)); // null
console.log("toString exists?", "toString" in pureDict); // false

