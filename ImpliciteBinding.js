// In JavaScript, implicit binding refers to the automatic 
// binding of the this keyword within a function to the object 
// that contains the function. This binding occurs when a method 
// is invoked on an object, and the this keyword inside that method 
// refers to the object itself.

const person = {
    name: 'John',
    sayHello: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  person.sayHello(); 


  // In this example, when person.sayHello() is called, 
  // the this keyword inside the sayHello method is implicitly 
  // bound to the person object. So, this.name refers to the name 
  // property of the person object.

  // Implicit binding is a key concept in understanding how the 
  // this keyword behaves in different contexts, and it allows methods 
  // to reference the properties of the object they are called on.


  // But what if we replace our anonyms function with arrow function ? 


  const person1 = {
    name: 'John',
    sayHello: () => {
      console.log(`Hello, ${this}!`);
    },
  };
  
  person1.sayHello(); 

  // with the arrow function this is refer to windows object and in windowns there is
  // not any name keyword that why it is showing undefined