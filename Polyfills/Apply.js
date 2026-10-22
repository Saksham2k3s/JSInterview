// ==========================================
// POLYFILL: Function.prototype.apply
// ==========================================

/**
 * Polyfill for Function.prototype.apply
 * 
 * Difference from call:
 * - call takes comma-separated arguments: fn.call(ctx, arg1, arg2)
 * - apply takes an array-like argument list: fn.apply(ctx, [arg1, arg2])
 * 
 * Key Interview Edge Cases to Handle:
 * 1. 'this' must be callable.
 * 2. If context is null or undefined, default to globalThis.
 * 3. If context is primitive, wrap with Object(context).
 * 4. Second argument must be an array or array-like object (or undefined/null).
 * 5. Use Symbol property and clean it up.
 * 6. Return the execution result.
 */

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not callable`);
  }

  if (args !== undefined && args !== null && !Array.isArray(args) && typeof args[Symbol.iterator] !== "function") {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context = context ?? globalThis;
  context = Object(context);

  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;

  const result = args ? context[fnSymbol](...args) : context[fnSymbol]();
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

console.log(introduce.myApply(user, ["Hi there", "!!"]));
// Expected: "Hi there, I am Saksham, age 21!!"

// Math.max using apply
const numbers = [10, 45, 2, 88, 12];
const maxVal = Math.max.myApply(null, numbers);
console.log("Max value via myApply:", maxVal); // 88
