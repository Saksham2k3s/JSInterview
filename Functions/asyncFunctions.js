// ==========================================
// ASYNC / AWAIT & GENERATORS INTERVIEW GUIDE
// ==========================================

/**
 * 1. What is async/await?
 * - Syntactic sugar built on top of Promises and Generators.
 * - An 'async' function ALWAYS returns a Promise. If you return a primitive value (e.g. return 5),
 *   it implicitly wraps it in Promise.resolve(5).
 * - 'await' pauses the execution of the async function and yields control back to the caller
 *   until the Promise settles.
 * 
 * 2. Parallel vs Sequential with async/await:
 * - Sequential:
 *   const a = await fetchA();
 *   const b = await fetchB(); // Waits for a to complete first!
 * 
 * - Parallel:
 *   const [a, b] = await Promise.all([fetchA(), fetchB()]); // Runs concurrently!
 */

// Example 1: Async function return behavior
async function getNumber() {
  return 42;
}
getNumber().then((val) => console.log("Implicit promise resolution:", val)); // 42

// Example 2: Parallel execution with Promise.all
async function fetchParallel() {
  const p1 = new Promise((res) => setTimeout(() => res("Data 1"), 50));
  const p2 = new Promise((res) => setTimeout(() => res("Data 2"), 50));

  console.time("Parallel Execution");
  const [res1, res2] = await Promise.all([p1, p2]);
  console.timeEnd("Parallel Execution");
  console.log("Results:", res1, res2);
}

fetchParallel();

// -------------------------------------------------------------
// 3. Generators (*function and yield)
// -------------------------------------------------------------
/**
 * Generators allow pausing and resuming function execution.
 * They return an Iterator object with .next() returning { value, done }.
 */
function* idGenerator() {
  let id = 1;
  while (true) {
    yield `USER_${id++}`;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // USER_1
console.log(gen.next().value); // USER_2
console.log(gen.next().value); // USER_3
