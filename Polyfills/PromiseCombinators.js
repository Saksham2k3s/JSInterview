// =======================================================
// MASTER POLYFILL: ALL 4 PROMISE COMBINATORS
// Promise.all | Promise.allSettled | Promise.race | Promise.any
// =======================================================

// -------------------------------------------------------------
// 1. Promise.all
// Fails fast if ANY promise rejects. Resolves with array of values when ALL resolve.
// -------------------------------------------------------------
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const items = Array.from(promises);
    if (items.length === 0) return resolve([]);

    const results = new Array(items.length);
    let completed = 0;

    items.forEach((item, index) => {
      Promise.resolve(item).then(
        (val) => {
          results[index] = val;
          if (++completed === items.length) resolve(results);
        },
        (err) => reject(err)
      );
    });
  });
};

// -------------------------------------------------------------
// 2. Promise.allSettled
// NEVER rejects. Waits for ALL promises to settle (either fulfilled or rejected).
// Returns array of objects: { status: 'fulfilled', value } or { status: 'rejected', reason }
// -------------------------------------------------------------
Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    const items = Array.from(promises);
    if (items.length === 0) return resolve([]);

    const results = new Array(items.length);
    let completed = 0;

    items.forEach((item, index) => {
      Promise.resolve(item).then(
        (value) => {
          results[index] = { status: "fulfilled", value };
          if (++completed === items.length) resolve(results);
        },
        (reason) => {
          results[index] = { status: "rejected", reason };
          if (++completed === items.length) resolve(results);
        }
      );
    });
  });
};

// -------------------------------------------------------------
// 3. Promise.race
// Settles as soon as ANY promise settles (first to resolve OR first to reject).
// -------------------------------------------------------------
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    const items = Array.from(promises);
    // Note: If empty array passed to Promise.race, it stays pending forever!
    items.forEach((item) => {
      Promise.resolve(item).then(resolve, reject);
    });
  });
};

// -------------------------------------------------------------
// 4. Promise.any
// Resolves as soon as the FIRST promise FULFILLS.
// If ALL promises reject, rejects with an AggregateError containing all rejection reasons.
// -------------------------------------------------------------
Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    const items = Array.from(promises);
    if (items.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    const errors = new Array(items.length);
    let rejectedCount = 0;

    items.forEach((item, index) => {
      Promise.resolve(item).then(
        (value) => resolve(value), // First success wins!
        (error) => {
          errors[index] = error;
          rejectedCount++;
          if (rejectedCount === items.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        }
      );
    });
  });
};

// --- Tests ---
async function runTests() {
  const pFastFail = new Promise((_, rej) => setTimeout(() => rej("Fast Failure"), 50));
  const pSlowSuccess = new Promise((res) => setTimeout(() => res("Slow Success"), 150));
  const pFastSuccess = new Promise((res) => setTimeout(() => res("Fast Success"), 80));

  console.log("=== Testing Promise.myAllSettled ===");
  const settled = await Promise.myAllSettled([pFastFail, pSlowSuccess]);
  console.log("allSettled:", settled);

  console.log("\n=== Testing Promise.myRace ===");
  try {
    await Promise.myRace([pFastFail, pSlowSuccess]);
  } catch (raceErr) {
    console.log("race result (first to settle was failure):", raceErr);
  }

  console.log("\n=== Testing Promise.myAny ===");
  const anyResult = await Promise.myAny([pFastFail, pFastSuccess, pSlowSuccess]);
  console.log("any result (first successful):", anyResult); // "Fast Success"
}

runTests();

