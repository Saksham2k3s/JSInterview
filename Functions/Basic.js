// ==========================================
// JAVASCRIPT FUNCTIONS - FUNDAMENTALS
// ==========================================

// Q.1 What is a function?
// Reusable blocks of code designed to perform a particular task.
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Saksham"));


// Q.2 What are function expressions?
// When a function is assigned to a variable. They are not hoisted like function declarations.
const square = function (num) {
  return num * num;
};
console.log("Square of 5:", square(5));


// Q.3 What are First-Class Functions?
// Functions in JS can be passed as arguments, returned from other functions,
// and assigned to variables (treated like first-class citizens).
function sum(num1, num2) {
  return num1 + num2;
}

function displayCalculation(fn, a, b) {
  console.log("Calculated value is:", fn(a, b));
}
displayCalculation(sum, 4, 5); // 9


// Q.4 What is an IIFE (Immediately Invoked Function Expression)?
// A function that runs immediately as soon as it is defined. Creates a private scope.
(function mul(num) {
  const result = num * num;
  console.log("IIFE executed:", result);
  return result;
})(4);


// Q.5 Scope Chain & Variable Shadowing in Nested Functions
(function (x) {
  return (function (y) {
    const x = 9; // Variable shadowing: shadows outer x
    console.log("Shadowed x value:", x); // 9
  })(2);
})(1);
