// ==========================================
// POLYFILL: Function.prototype.bind
// ==========================================

/**
 * Polyfill for Function.prototype.bind
 * 
 * Key Interview Concepts Tested:
 * 1. Currying / Partial Application: concatenating initial args with subsequent args.
 * 2. 'new' Keyword Behavior (THE TRICK QUESTION!):
 *    When a bound function is called with `new`, the bound `context` is IGNORED,
 *    and `this` refers to the new instance created by `new`.
 * 3. Preserving prototype chain for `instanceof`.
 */

Function.prototype.myBind = function (context, ...initialArgs) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not callable`);
  }

  const originalFn = this;

  function boundFunction(...laterArgs) {
    // If called with 'new boundFunction(...)', 'this' is an instance of boundFunction
    const isNew = this instanceof boundFunction;
    const effectiveContext = isNew ? this : context;

    return originalFn.apply(effectiveContext, [...initialArgs, ...laterArgs]);
  }

  // Preserve prototype chain so 'instance instanceof originalFn' remains true
  if (originalFn.prototype) {
    boundFunction.prototype = Object.create(originalFn.prototype);
  }

  return boundFunction;
};

// --- Test 1: Standard Binding & Currying ---
const person = {
  name: "Saksham",
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const greetSaksham = greet.myBind(person, "Hello");
console.log(greetSaksham("!")); // "Hello, Saksham!"

// --- Test 2: Currying / Multiple arguments ---
function multiply(a, b, c) {
  return a * b * c;
}
const multiplyByTwo = multiply.myBind(null, 2);
console.log(multiplyByTwo(3, 4)); // 24

// --- Test 3: Used as Constructor with 'new' (The Interview Trick) ---
function User(role) {
  this.role = role;
}

const BoundUser = User.myBind({ role: "Ignored" });
const instance = new BoundUser("Software Engineer");
console.log(instance.role); // "Software Engineer" (NOT "Ignored"!)
console.log(instance instanceof User); // true

