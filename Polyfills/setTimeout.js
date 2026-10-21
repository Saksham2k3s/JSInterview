// ==========================================
// POLYFILL: setTimeout & setInterval
// ==========================================

// -------------------------------------------------------------
// 1. Classic Interview Question: Implement setInterval using setTimeout
// -------------------------------------------------------------
function createCustomInterval() {
  let intervalId = 0;
  const intervalMap = new Map();

  function mySetInterval(callback, delay, ...args) {
    const id = ++intervalId;

    function step() {
      intervalMap.set(
        id,
        setTimeout(() => {
          callback(...args);
          // Only schedule next execution if not cleared
          if (intervalMap.has(id)) {
            step();
          }
        }, delay)
      );
    }

    step();
    return id;
  }

  function myClearInterval(id) {
    if (intervalMap.has(id)) {
      clearTimeout(intervalMap.get(id));
      intervalMap.delete(id);
    }
  }

  return { mySetInterval, myClearInterval };
}

// -------------------------------------------------------------
// 2. Implement setTimeout using requestAnimationFrame (Browser polyfill)
// -------------------------------------------------------------
function createCustomTimeout() {
  let timerId = 0;
  const timerMap = new Map();

  function mySetTimeout(callback, delay, ...args) {
    const id = ++timerId;
    const startTime = Date.now();

    function check() {
      if (!timerMap.has(id)) return; // Was cleared

      if (Date.now() - startTime >= delay) {
        callback(...args);
        timerMap.delete(id);
      } else {
        // In browser: requestAnimationFrame(check)
        // In Node fallback: setImmediate(check)
        if (typeof requestAnimationFrame !== "undefined") {
          const rafId = requestAnimationFrame(check);
          timerMap.set(id, rafId);
        } else {
          const immId = setImmediate(check);
          timerMap.set(id, immId);
        }
      }
    }

    timerMap.set(id, true);
    check();
    return id;
  }

  function myClearTimeout(id) {
    if (timerMap.has(id)) {
      const handle = timerMap.get(id);
      if (typeof cancelAnimationFrame !== "undefined" && typeof handle === "number") {
        cancelAnimationFrame(handle);
      } else if (typeof clearImmediate !== "undefined") {
        clearImmediate(handle);
      }
      timerMap.delete(id);
    }
  }

  return { mySetTimeout, myClearTimeout };
}

// Test custom setTimeout:
const { mySetTimeout, myClearTimeout } = createCustomTimeout();

console.log("Start mySetTimeout test");
const tId = mySetTimeout((msg) => {
  console.log("Executed mySetTimeout:", msg);
}, 200, "Hello from custom timer!");

// Test custom setInterval:
const { mySetInterval, myClearInterval } = createCustomInterval();
let count = 0;
const intId = mySetInterval(() => {
  count++;
  console.log(`mySetInterval tick: ${count}`);
  if (count === 3) {
    myClearInterval(intId);
    console.log("Cleared custom interval after 3 ticks.");
  }
}, 100);
