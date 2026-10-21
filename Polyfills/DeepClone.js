// ==========================================
// POLYFILL & GUIDE: Deep Clone vs Shallow Clone
// ==========================================

/**
 * 3 Ways to Clone in JavaScript:
 * 
 * 1. Shallow Clone:
 *    - Spread: { ...obj }, [ ...arr ]
 *    - Object.assign({}, obj), arr.slice()
 *    * LIMITATION: Nested objects still share reference!
 * 
 * 2. JSON.parse(JSON.stringify(obj)):
 *    * LIMITATIONS:
 *      - Ignores functions, undefined, Symbols.
 *      - Converts Date to ISO strings.
 *      - Converts RegExp to empty objects {}.
 *      - Converts NaN and Infinity to null.
 *      - THROWS ERROR on circular references!
 * 
 * 3. structuredClone(obj) (Native modern JS):
 *    - Handles circular references, Dates, RegExps, Maps, Sets, TypedArrays.
 *    * LIMITATION: Cannot clone functions or DOM nodes (throws DOMException).
 * 
 * 4. Custom Recursive Deep Clone (The Interview Gold Standard):
 */

function deepClone(target, hash = new WeakMap()) {
  // Primitives and functions
  if (target === null || typeof target !== "object") {
    return target;
  }

  // Handle Dates
  if (target instanceof Date) return new Date(target);

  // Handle RegExps
  if (target instanceof RegExp) return new RegExp(target.source, target.flags);

  // Handle Maps
  if (target instanceof Map) {
    const copyMap = new Map();
    target.forEach((val, key) => copyMap.set(deepClone(key, hash), deepClone(val, hash)));
    return copyMap;
  }

  // Handle Sets
  if (target instanceof Set) {
    const copySet = new Set();
    target.forEach((val) => copySet.add(deepClone(val, hash)));
    return copySet;
  }

  // Handle Circular References
  if (hash.has(target)) {
    return hash.get(target);
  }

  // Maintain Array vs Plain Object
  const copy = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  hash.set(target, copy);

  // Reflect.ownKeys gets both string keys and Symbol keys!
  for (let key of Reflect.ownKeys(target)) {
    copy[key] = deepClone(target[key], hash);
  }

  return copy;
}

// --- Test Cases ---
const original = {
  num: 42,
  str: "Saksham",
  bool: true,
  date: new Date("2025-01-01"),
  regex: /hello/gi,
  arr: [1, [2, 3]],
  nested: {
    city: "Gwalior",
  },
  fn: function () {
    return "cloned function";
  },
  [Symbol("id")]: 101,
};

// Circular reference test:
original.self = original;

const cloned = deepClone(original);

console.log("Cloned successfully!");
console.log("Circular ref matches:", cloned.self === cloned); // true
console.log("Independent nested object:", cloned.nested !== original.nested); // true
console.log("Symbol key preserved:", cloned[Object.getOwnPropertySymbols(cloned)[0]]); // 101
console.log("Date preserved:", cloned.date instanceof Date); // true
console.log("Regex preserved:", cloned.regex instanceof RegExp); // true

