// ==========================================
// JAVASCRIPT OBJECTS - INTERVIEW PRACTICE
// ==========================================

// Q.1 What will be the output of duplicate keys in object literal?
const obj = {
  a: "one",
  b: "two",
  a: "Three", // This key will overwrite the earlier 'a', but retains the first insertion position order
};
console.log(obj); // { a: "Three", b: "two" }


// Q.2 Create a function mulByTwo(obj) that multiplies all numeric properties by 2
let obj2 = {
  a: 200,
  b: 300,
  c: "Saksham",
};

function mulByTwo(target) {
  for (let key in target) {
    if (typeof target[key] === "number") {
      target[key] *= 2;
    }
  }
}

mulByTwo(obj2);
console.log(obj2); // { a: 400, b: 600, c: "Saksham" }


// Q.3 What will be the output of using objects as keys in plain objects?
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // b is coerced to string "[object Object]"
a[c] = 456; // c is also coerced to "[object Object]", overwriting a["[object Object]"]

console.log(a[b]); // 456
console.log(a[c]); // 456
// Tip: Use new Map() if you want objects as distinct keys!


// Q.4 What will be the output with Set as an object key?
const obj3 = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj3[set] = "hello"; // set is coerced to string: set.toString() -> "[object Set]"
console.log(obj3["[object Set]"]); // "hello"


// Q.5 What are JSON.stringify() and JSON.parse() and their limitations?
const obj4 = {
  name: "Saksham",
  age: 20,
  nested: { active: true },
  fn: () => console.log("hi"), // Lost during stringify!
  date: new Date(),            // Converted to ISO string!
  sym: Symbol("id"),           // Lost!
  undef: undefined             // Lost!
};

const strObj = JSON.stringify(obj4);
console.log(strObj); 
// Note: Functions, undefined, and symbols are omitted by JSON.stringify.
// Circular references throw TypeError: Converting circular structure to JSON.
console.log(JSON.parse(strObj));


// Q.6 Object spread operator behavior
const obj5 = {
  name: "Saksham",
  age: 20,
};

const admin = { admin: true, ...obj5 };
console.log(admin); // { admin: true, name: "Saksham", age: 20 }


// Q.7 What does the second argument (replacer) of JSON.stringify do?
const settings = {
  username: "Saksham",
  health: 90,
  level: 10,
};

// Only stringify the specific keys given in the array:
const filteredJson = JSON.stringify(settings, ["health", "level"]); 
console.log(filteredJson); // '{"health":90,"level":10}'


// Q.8 Arrow functions vs Regular method inside an object
const shape = {
  radius: 10,
  diameter() {
    return 2 * this.radius; // 'this' points to 'shape' object (implicit binding)
  },
  perimeter: () => {
    return 2 * Math.PI * (this?.radius || 0); // 'this' retains lexical scope (outer/global), not 'shape'!
  },
};

console.log("Diameter:", shape.diameter());   // 20
console.log("Perimeter:", shape.perimeter()); // 0 or NaN (this.radius is undefined)


// Q.9 Object Reference vs Value Copy
let cc = { greeting: "Hey!" };
let d = cc; // copies the memory reference, not the object itself
cc.greeting = "Hello";
console.log(d.greeting); // "Hello"


// Q.10 Object Equality Comparison
console.log({ a: 1 } == { a: 1 });  // false (different memory references)
console.log({ a: 1 } === { a: 1 }); // false


// Q.11 Object.freeze() vs Object.seal()
// - Object.freeze(): Prevents add, delete, or modify (completely read-only shallowly)
// - Object.seal(): Prevents add or delete, but CAN modify existing writable properties
const frozen = { x: 10 };
Object.freeze(frozen);
frozen.x = 20; // Silently fails (or throws TypeError in strict mode)
console.log("Frozen x:", frozen.x); // 10

const sealed = { y: 20 };
Object.seal(sealed);
sealed.y = 50; // Allowed!
delete sealed.y; // Fails!
console.log("Sealed y:", sealed.y); // 50


// Q.12 How to check if a property exists (Own vs Inherited)
const prototypeObj = { role: "admin" };
const userObj = Object.create(prototypeObj);
userObj.name = "Saksham";

console.log("name" in userObj); // true (own)
console.log("role" in userObj); // true (inherited from proto)
console.log(Object.hasOwn(userObj, "name")); // true (modern ES2022 own property check)
console.log(Object.hasOwn(userObj, "role")); // false (not own property)


// Q.13 Implement Deep Clone (Recursive)
function deepClone(target, hash = new WeakMap()) {
  if (target === null || typeof target !== "object") return target;
  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);
  
  // Handle circular references
  if (hash.has(target)) return hash.get(target);

  const copy = Array.isArray(target) ? [] : {};
  hash.set(target, copy);

  for (let key of Reflect.ownKeys(target)) {
    copy[key] = deepClone(target[key], hash);
  }
  return copy;
}

const deepSource = { 
  name: "Saksham", 
  skills: ["JS", "React"], 
  profile: { city: "Gwalior" } 
};
const deepCopied = deepClone(deepSource);
deepCopied.profile.city = "Delhi";
console.log("Original city unaffected:", deepSource.profile.city); // "Gwalior"
