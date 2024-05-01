// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Saksham";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

// What will output of this code ?

for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// This happens due to the closure property in JavaScript.
// The setTimeout function creates a closure, capturing the reference to the variable i.
// In the first loop, because let has block scope, each iteration gets its own i.
// In the second loop using var, there is only one i,
// and by the time the setTimeout executes, the loop has already finished,
// and i is left with the final value of 6.

let fun = function (...nums) {
  // if you are using the spread operator (Three dots at the time of calling the function) then you have to use the rest operator (Three dots at the time of receving the params).
  console.log("This is my nums array", nums[1]);
};

let array = [1, 2, 3];

fun(...array);
