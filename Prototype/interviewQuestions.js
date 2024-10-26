
// Things Learned (from different resources):

// --> What is Inheritance of an Object in Javascript?
//   When a new object is trying to access properties and methods of another old object, because this new object might be created from the old objects reference.
// Example :
// object1 = { city:'mumbai' };
// object2 = Object.create(object1);
// object2.name = 'Shiv';
// console.log(object2.name + 'is from' + object2.city); // here when one couldn't find city property inside object2, it goes to find this property in the inherited object1.
// This is called inheritance of an object in javscript. This type of inheritance is different from the classical inheitance of oops. This type of inheritance is provided by Prototype Inheritance.


// --> What is prototype in javascript?
// Statement - 'Almost everything in javascript is a object'

// Prototype is nothing but an object which consists of builtin properties and methods.

// In JavaScript, there are different types of prototypes depending on how the object is created:

// Object Literals and new Object(): The prototype of objects created with {} syntax or new Object() is Object.prototype.
// Array Literals and new Array(): The prototype of arrays created with [] syntax or new Array() is Array.prototype.
// Date and RegExp: The prototype of objects created with new Date() and new RegExp() are Date.prototype and RegExp.prototype respectively.

// In JavaScript, every function has a prototype property that refers to an object known as Function.prototype

// Whenever we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype.

// if you want to know what hidden properties and methods are stored in a prototype object?
// Array.prototype
// Function.prototype
// Object.prototype

// what if I want to know the hidden properties of a object declared in the code? 
// proto is reference to prototype ( or it points towards prototype ), if we want to access prototype, we do proto
// example: 
// let a = {};
// a.__proto__;


// What is difference between [[Prototype]] and _proto_ and prototype?
// Ans : All are objects.

// I]/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [[Prototype]] is a hidden private property that all objects have in Javascript, it holds a reference to the object’s prototype ([[Prototype]] : Object.prototype).

// An object’s prototype is the object that an object inherits or descends from. --> Means that if an object2 is inherting properties from another object1, then inside the object2's prototype we'll find the methods and properties of object1.

// so lets say we have two objects --> object1 and object2.

// null-->Object.prototype
// Object.prototype-->object1
// object1-->object2

// null-->Object.prototype-->object1-->object2

// since all objects in javascript point to the default Object.prototype, the Object.prototype points to null. To verify if its point to null or not see inside Object.prototype._proto_ === null

// II]///////////////////////////////////////////////////////////////////////////////////////////////////////////

// _proto_ (also called the Dunder Proto or Double Underscore Prototype) is a property of Object.prototype that exposes the hidden [[Prototype]] property of an object and allows you to access or modify it. You should not use it as it is deprecated, although you may come across it in older code.

// The modern way of accessing an object’s prototype is by using Object.getPrototypeOf(obj). You can also modify an object’s prototype using Object.setPrototypeOf(obj, prototype) as you can see in the following. 


// III]//////////////////////////////////////////////////////////////////////////////////////////////////////////

// .prototype is a special property that almost all functions have that is only used when a function is invoked as a constructor function. I say almost all because arrow functions and methods defined using the concise syntax do not have .prototype properties and cannot be used as constructors.

// The .prototype property contains a reference to an object and when a constructor is used to instantiate or create a new object, .prototype is set as the prototype of the new object.

// CONCLUSION : 
// .prototype is a special property that all functions have that contains a reference to an object.
// When a constructor is used to instantiate a new object, ConstructorName.prototype is set as the prototype of the new object.
// All instances of that constructor (the objects it creates) can access the properties of ConstructorName.prototype.

// Q1 > What will happen if we use x._proto_ and x.prototype, here x is a object declared using object literals?

// x._proto_ // this gives a object which containes hidden methods and properties defined for the prototype of varibale x, here variable x is an object, so it inherits the properties and methods of Object prototype.

// x.prototype // since x is a object decalred using a object literals, this gives a undefined.

// Q2 > What will happen if we use myfunc._proto_ and myfunc.prototype, myfunc is a construction function?

// myfunc._proto_ // this gives a object which containes two things --> custom made hidden methods and properties defined by the user + default hidden methods and properties of Function prototype; here myfunc is a function, so it inherits the properties and methods of Function prototype.

// myfunc.prototype // this gives the default hidden methods and properties of Function prototype; here myfunc is a function, so it inherits the properties and methods of Function prototype.

// Q3> What will happen if we use y._proto_ and y.prototype, y is a object declared using new keyord on construction function myfunc?

// let y = new myfunc();

// y._proto_ // this gives a refernce to the object which containes hidden methods and properties of the function myfunc, since y is an object which inherits from the myfunc.prototype, also it inherits the properties and methods of Object prototype.

// y.prototype // since y is a object, this gives a undefined.


// --> What is prototype chain and prototype inheritence in javascript?

// So basically a datatype/dataStructure in javascript has a prototype which refernces/points to a object(prototype), and this object(prototype) references/points again to another object(prototype), at some point this referencing ends and the object finally points to null. So when does it end? It ends when the last reference is to the Object.prototype, and this object.prototype points to null.

// So every prototype in javscript eventually points  finally to the Object.prototype , This is called Prototype chaining, and using this chaining method we can create a custom prototype inheritance between functions.