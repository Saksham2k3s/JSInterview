// =======================================================
// JAVASCRIPT ARRAYS: HIGH-FREQUENCY INTERVIEW TRICKS
// =======================================================

// -------------------------------------------------------------
// 1. Mutating vs Non-Mutating Methods
// -------------------------------------------------------------
/**
 * Mutating (Changes original array in place):
 * - push, pop, shift, unshift
 * - splice, reverse, sort, fill, copyWithin
 * 
 * Non-Mutating (Returns a new array or value):
 * - slice, concat, map, filter, flat, flatMap
 * - Modern ES2023 non-mutating methods: toSorted(), toReversed(), toSpliced(), with()
 */

const original = [3, 1, 2];
// Mutating:
// original.sort(); // alters 'original'
// Non-mutating modern alternative:
const sortedCopy = original.toSorted ? original.toSorted() : [...original].sort((a, b) => a - b);
console.log("Original untouched:", original); // [3, 1, 2]
console.log("Sorted copy:", sortedCopy);      // [1, 2, 3]


// -------------------------------------------------------------
// 2. The Infamous Array.prototype.sort() Trap
// -------------------------------------------------------------
// Default sort converts elements to strings and compares UTF-16 code units!
const numbers = [10, 5, 100, 1, 25];
console.log("Default sort (Alphabetical!):", numbers.slice().sort()); 
// Output: [1, 10, 100, 25, 5] (100 comes before 25 because "1" < "2")

// Correct numerical sort:
console.log("Correct numerical sort:", numbers.slice().sort((a, b) => a - b));
// Output: [1, 5, 10, 25, 100]


// -------------------------------------------------------------
// 3. slice() vs splice()
// -------------------------------------------------------------
const animals = ["cat", "dog", "elephant", "tiger"];

// slice(start, endExclusive): DOES NOT mutate
const sliced = animals.slice(1, 3);
console.log("slice result:", sliced); // ['dog', 'elephant']
console.log("animals after slice:", animals); // untouched

// splice(start, deleteCount, ...itemsToAdd): MUTATES in place
const spliced = animals.splice(1, 2, "lion", "wolf");
console.log("splice return (removed items):", spliced); // ['dog', 'elephant']
console.log("animals after splice:", animals); // ['cat', 'lion', 'wolf', 'tiger']


// -------------------------------------------------------------
// 4. Remove Duplicates from an Array
// -------------------------------------------------------------
const duplicates = [1, 2, 2, 3, 4, 4, 5, 1];

// Method A: Set
const uniqueA = [...new Set(duplicates)];
console.log("Unique with Set:", uniqueA);

// Method B: Filter + indexOf
const uniqueB = duplicates.filter((item, index) => duplicates.indexOf(item) === index);
console.log("Unique with filter:", uniqueB);

// Method C: Array of Objects deduplication by key
const users = [
  { id: 1, name: "Saksham" },
  { id: 2, name: "Anuj" },
  { id: 1, name: "Saksham" },
];
const uniqueUsers = Array.from(new Map(users.map((u) => [u.id, u])).values());
console.log("Unique objects by id:", uniqueUsers);


// -------------------------------------------------------------
// 5. Array Length Quirks
// -------------------------------------------------------------
const arrLengthDemo = [1, 2, 3, 4, 5];
arrLengthDemo.length = 2; // Truncates the array!
console.log("Truncated array via length:", arrLengthDemo); // [1, 2]

arrLengthDemo.length = 0; // Emptying the array
console.log("Cleared array:", arrLengthDemo); // []


// -------------------------------------------------------------
// 6. some() vs every() vs find() vs findIndex()
// -------------------------------------------------------------
const scores = [80, 95, 45, 60];
console.log("Has any failing score (< 50)?", scores.some((s) => s < 50)); // true
console.log("Did everyone pass (>= 50)?", scores.every((s) => s >= 50));   // false
console.log("First failing score:", scores.find((s) => s < 50));           // 45

