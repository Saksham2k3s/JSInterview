// Explicit binding in JavaScript refers to 
// the process of manually specifying the context 
// (the object to which the this keyword refers) for 
// a function using functions like call, apply, or bind. 
// Unlike implicit binding, where the context is automatically 
// determined based on how a function is invoked, explicit binding 
// gives you control over setting the this value.

// Here's an example using call:

function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person = {
    name: 'John',
  };

  const person2 = {
    name : 'Saksham'
  }
  
  greet.call(person2); // Output: Hello, John!

  //In this example, call is used to invoke the greet 
  // function and explicitly bind this to the person object. 
  // As a result, this.name inside greet refers to the name property 
  // of the person object.

// Similarly, apply and bind can also be used for explicit binding. 
// apply is similar to call but takes an array of arguments, while bind 
// returns a new function with the specified this value, allowing you to later invoke it.

// Explicit binding is useful in scenarios where you want to control the 
// context of a function, especially when dealing with functions that are detached 
// from objects or when you need to borrow methods from one object to use with another.
  