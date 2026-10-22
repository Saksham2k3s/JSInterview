// ==========================================
// POLYFILL: Function.prototype.call
// ==========================================

/**
 * Polyfill for Function.prototype.call
 * 
 * Key Interview Edge Cases to Handle:
 * 1. 'this' must be a callable function.
 * 2. If context is null or undefined, default to globalThis (window/global).
 * 3. If context is a primitive (number, string, boolean), wrap it in Object(context).
 * 4. Use Symbol to avoid overwriting existing properties on context.
 * 5. Delete the temporary property afterwards.
 * 6. Return the result of the function execution.
 */

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not callable`);
  }

  // Handle null/undefined or primitive context
  context = context ?? globalThis;
  context = Object(context);

  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);
  delete context[fnSymbol];

  return result;
};

// --- Test Cases ---
const user = {
  name: "Saksham",
  age: 21,
};

function introduce(greeting, punctuation) {
  return `${greeting}, I am ${this.name}, age ${this.age}${punctuation}`;
}

console.log(introduce.myCall(user, "Hello", "!"));
// Expected: "Hello, I am Saksham, age 21!"

// Testing primitive context:
function checkContext() {
  return typeof this;
}
console.log(checkContext.myCall(123)); // "object" (wrapped Number)

// Testing default context:
function getGlobal() {
  return this === globalThis;
}
console.log(getGlobal.myCall(null)); // true
