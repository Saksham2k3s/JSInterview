// What is Closures ?

// In JavaScript, a closure is when a function "closes over" or 
// captures variables from its outer scope, even after that outer 
// scope has finished executing. This allows the function to access those captured 
// variables later.

function outerFunction() {
    let outerVariable = 10;
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Call outerFunction to get the inner function
  let closureExample = outerFunction()
  // Call the inner function, even though outerFunction has finished executing
  closureExample(); // Outputs: 10
  

  // 2nd example

  function myFunc(){
    var name = "JavaScript";
    function display(num){
        console.log(name, num);
    }
    return display;
  }

// var myFuncVar = myFunc();
// myFuncVar();

// we can also call it like that 
myFunc()(5)


// Closures Chain

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
