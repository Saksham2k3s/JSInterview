// ==========================================
// POLYFILL: Promise.all
// ==========================================

/**
 * Polyfill for Promise.all
 * 
 * Rules:
 * 1. Takes an iterable of promises (or values).
 * 2. Returns a new Promise.
 * 3. If iterable is empty, resolves immediately with an empty array [].
 * 4. Resolves when ALL promises resolve, preserving input order in results array.
 * 5. Rejects IMMEDIATELY upon the FIRST rejection (fail-fast).
 * 6. Non-promise items must be wrapped with Promise.resolve().
 */

Promise.myPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    // Check if iterable
    if (!promises || typeof promises[Symbol.iterator] !== "function") {
      return reject(new TypeError(`${typeof promises} is not iterable`));
    }

    const items = Array.from(promises);
    if (items.length === 0) {
      return resolve([]);
    }

    const results = new Array(items.length);
    let resolvedCount = 0;

    items.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = value; // Preserves original position, regardless of resolution speed
          resolvedCount++;

          if (resolvedCount === items.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error); // Fail fast
        });
    });
  });
};

// --- Test Cases ---
const p1 = new Promise((res) => setTimeout(() => res("Fast"), 100));
const p2 = new Promise((res) => setTimeout(() => res("Slow"), 300));
const p3 = 42; // Non-promise value

Promise.myPromiseAll([p1, p2, p3])
  .then((results) => {
    console.log("Promise.myPromiseAll results:", results);
    // ["Fast", "Slow", 42]
  })
  .catch((err) => console.error("Error:", err));

// Test Fail-Fast:
const pFail = new Promise((_, rej) => setTimeout(() => rej("Something failed!"), 50));
Promise.myPromiseAll([p1, pFail, p2])
  .then(() => console.log("Should not reach here"))
  .catch((err) => console.log("Caught expected rejection:", err));
