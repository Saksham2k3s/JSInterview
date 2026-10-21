// ==========================================
// POLYFILL: Array.prototype.flat & flatMap
// ==========================================

/**
 * Polyfill for Array.prototype.flat
 * 
 * Rules:
 * 1. Flattens nested arrays up to 'depth' levels (defaults to 1).
 * 2. If depth is Infinity, flattens completely.
 * 3. Removes empty slots in sparse arrays.
 */

Array.prototype.myFlat = function (depth = 1) {
  if (depth < 1) return this.slice();

  const result = [];

  function flatten(arr, currentDepth) {
    for (let i = 0; i < arr.length; i++) {
      // Check if slot exists to handle sparse arrays like [1, , 3]
      if (i in arr) {
        const item = arr[i];
        if (Array.isArray(item) && currentDepth > 0) {
          flatten(item, currentDepth - 1);
        } else {
          result.push(item);
        }
      }
    }
  }

  flatten(this, depth);
  return result;
};

// Polyfill for Array.prototype.flatMap
Array.prototype.myFlatMap = function (callback, thisArg) {
  return this.map(callback, thisArg).myFlat(1);
};

// --- Test Cases ---
const nestedArr = [1, [2, [3, [4, 5]]], 6, , 7]; // Notice sparse slot
console.log("myFlat(1):", nestedArr.myFlat(1));
// [1, 2, [3, [4, 5]], 6, 7]

console.log("myFlat(2):", nestedArr.myFlat(2));
// [1, 2, 3, [4, 5], 6, 7]

console.log("myFlat(Infinity):", nestedArr.myFlat(Infinity));
// [1, 2, 3, 4, 5, 6, 7]

const words = ["hello world", "interview ready"];
console.log("myFlatMap:", words.myFlatMap((str) => str.split(" ")));
// ['hello', 'world', 'interview', 'ready']

