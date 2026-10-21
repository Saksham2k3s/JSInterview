// =======================================================
// JAVASCRIPT EVENT LOOP: MICROTASKS vs MACROTASKS
// =======================================================

/**
 * THE EVENT LOOP GOLDEN RULE:
 * 
 * 1. Synchronous Code: Always executes immediately on Call Stack until empty.
 * 2. Microtask Queue (HIGH PRIORITY):
 *    - Promise.then / catch / finally callbacks
 *    - queueMicrotask(...)
 *    - await continuation (everything after 'await' in async functions)
 *    - process.nextTick (Node.js - executed before other microtasks!)
 *    * IMPORTANT: The engine drains the ENTIRE Microtask Queue before picking the next macrotask!
 * 3. Macrotask (Task) Queue:
 *    - setTimeout, setInterval
 *    - setImmediate (Node.js)
 *    - I/O operations, UI rendering callbacks (Browser)
 */

// -------------------------------------------------------------
// PUZZLE 1: Classic Promise vs setTimeout
// -------------------------------------------------------------
console.log("--- Puzzle 1 ---");
console.log("1: Synchronous");

setTimeout(() => {
  console.log("2: setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise.then (Microtask)");
});

queueMicrotask(() => {
  console.log("4: queueMicrotask (Microtask)");
});

console.log("5: Synchronous");
// Expected Order: 1 -> 5 -> 3 -> 4 -> 2


// -------------------------------------------------------------
// PUZZLE 2: async/await Execution Order
// -------------------------------------------------------------
/**
 * KEY TRICK: An async function executes SYNCHRONOUSLY up until the FIRST 'await'.
 * The 'await' expression itself is evaluated, and then the rest of the function
 * is scheduled into the MICROTASK QUEUE!
 */
async function asyncDemo() {
  console.log("A: Inside asyncDemo start (Sync)");
  await Promise.resolve();
  console.log("B: After await (Microtask)");
}

setTimeout(() => {
  console.log("\n--- Puzzle 2 ---");
  console.log("Start Puzzle 2");
  asyncDemo();
  console.log("C: End of synchronous script in Puzzle 2");
  // Order in Puzzle 2: Start -> A -> C -> B
}, 50);


// -------------------------------------------------------------
// PUZZLE 3: Nested Microtask starvation / Priority
// -------------------------------------------------------------
/**
 * What happens if a microtask schedules another microtask?
 * The engine continues draining microtasks until queue is EMPTY,
 * postponing any pending setTimeout macrotasks!
 */
setTimeout(() => {
  console.log("\n--- Puzzle 3: Nested Microtasks ---");
  setTimeout(() => console.log("Macrotask 1"), 0);

  Promise.resolve()
    .then(() => {
      console.log("Microtask 1");
      return Promise.resolve();
    })
    .then(() => {
      console.log("Microtask 2 (Nested)");
    });
  // Output: Microtask 1 -> Microtask 2 -> Macrotask 1
}, 100);


// -------------------------------------------------------------
// PUZZLE 4: Node.js process.nextTick vs setImmediate
// -------------------------------------------------------------
setTimeout(() => {
  console.log("\n--- Puzzle 4: Node.js Spec ---");
  setImmediate(() => console.log("setImmediate (Check phase)"));
  process.nextTick(() => console.log("process.nextTick (Microtask before promises)"));
  Promise.resolve().then(() => console.log("Promise.then"));
  // Node Output: process.nextTick -> Promise.then -> setImmediate
}, 200);

