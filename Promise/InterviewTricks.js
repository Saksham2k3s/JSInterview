// =======================================================
// PROMISES & ASYNC/AWAIT: TOP CODING INTERVIEW TRICKS
// =======================================================

// -------------------------------------------------------------
// 1. Execute an Array of Async Functions SEQUENTIALLY
// -------------------------------------------------------------
// Given an array of async tasks, execute them one after another (not in parallel!)
const asyncTasks = [
  () => new Promise((res) => setTimeout(() => res("Task 1 Done"), 100)),
  () => new Promise((res) => setTimeout(() => res("Task 2 Done"), 50)),
  () => new Promise((res) => setTimeout(() => res("Task 3 Done"), 80)),
];

// Approach A: Using for...of loop with await
async function runSequential(tasks) {
  const results = [];
  for (const task of tasks) {
    const res = await task();
    results.push(res);
  }
  return results;
}

// Approach B: Using Array.prototype.reduce (Interview favorite!)
function runSequentialWithReduce(tasks) {
  return tasks.reduce((prevPromise, currentTask) => {
    return prevPromise.then((results) => {
      return currentTask().then((currentResult) => [...results, currentResult]);
    });
  }, Promise.resolve([]));
}

// -------------------------------------------------------------
// 2. Retry Promise with Exponential Backoff
// (Asked in senior / tech-lead frontend interviews)
// -------------------------------------------------------------
function retryPromise(fn, retries = 3, delay = 50) {
  return new Promise((resolve, reject) => {
    function attempt(currentAttempt) {
      fn()
        .then(resolve)
        .catch((error) => {
          if (currentAttempt <= 1) {
            reject(error);
          } else {
            console.log(`Attempt failed. Retrying... Attempts left: ${currentAttempt - 1}`);
            setTimeout(() => attempt(currentAttempt - 1), delay * (4 - currentAttempt));
          }
        });
    }

    attempt(retries);
  });
}

// -------------------------------------------------------------
// 3. Difference between .then(success, failure) and .then(success).catch(failure)
// -------------------------------------------------------------
/**
 * CRITICAL INTERVIEW TRAP:
 * - promise.then(onSuccess, onFailure):
 *   If 'onSuccess' itself throws an error, the 'onFailure' attached in the SAME .then()
 *   CANNOT catch it!
 * - promise.then(onSuccess).catch(onFailure):
 *   The '.catch()' CAN catch errors thrown inside 'onSuccess'!
 */

// -------------------------------------------------------------
// Run Test Demonstrations
// -------------------------------------------------------------
async function demo() {
  console.log("=== Running Sequential Tasks ===");
  const seqResults = await runSequential(asyncTasks);
  console.log("Sequential results:", seqResults);

  console.log("\n=== Testing Promise Retry ===");
  let calls = 0;
  const flakeyService = () =>
    new Promise((resolve, reject) => {
      calls++;
      if (calls < 3) reject(new Error(`Failed on attempt #${calls}`));
      else resolve(`Succeeded on attempt #${calls}!`);
    });

  const retryRes = await retryPromise(flakeyService, 4, 30);
  console.log("Retry success:", retryRes);
}

demo();

