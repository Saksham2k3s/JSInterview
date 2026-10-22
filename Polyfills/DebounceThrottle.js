// ==========================================
// POLYFILL: Debounce & Throttle
// ==========================================

/**
 * DEBOUNCE vs THROTTLE (Top Interview Concept)
 * 
 * - Debounce: Groups a burst of events into a single execution.
 *   Only runs after 'delay' milliseconds of INACTIVITY.
 *   Use cases: Search bar autocomplete, window resize finish, autosave.
 * 
 * - Throttle: Guarantees execution at most ONCE every 'interval' milliseconds,
 *   no matter how many times the user fires the event.
 *   Use cases: Infinite scroll pagination, scroll progress indicator, mousemove tracker.
 */

// -------------------------------------------------------------
// 1. Debounce Implementation (with immediate / leading execution support)
// -------------------------------------------------------------
function debounce(fn, delay, immediate = false) {
  let timerId = null;

  function debounced(...args) {
    const context = this;
    const callNow = immediate && !timerId;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      if (!immediate) {
        fn.apply(context, args);
      }
    }, delay);

    if (callNow) {
      fn.apply(context, args);
    }
  }

  // Bonus Interview Feature: Add cancel method
  debounced.cancel = function () {
    clearTimeout(timerId);
    timerId = null;
  };

  return debounced;
}

// -------------------------------------------------------------
// 2. Throttle Implementation (Timestamp + Timeout hybrid)
// -------------------------------------------------------------
function throttle(fn, limit) {
  let lastRan = 0;
  let timerId = null;

  function throttled(...args) {
    const context = this;
    const now = Date.now();

    if (now - lastRan >= limit) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      fn.apply(context, args);
      lastRan = now;
    } else if (!timerId) {
      // Ensure the trailing call still fires after the remaining time
      timerId = setTimeout(() => {
        fn.apply(context, args);
        lastRan = Date.now();
        timerId = null;
      }, limit - (now - lastRan));
    }
  }

  throttled.cancel = function () {
    clearTimeout(timerId);
    timerId = null;
    lastRan = 0;
  };

  return throttled;
}

// --- Quick Verification ---
console.log("=== Testing Debounce ===");
const logSearch = debounce((query) => {
  console.log("Debounced API Call with:", query);
}, 100);

logSearch("a");
logSearch("ap");
logSearch("app");
logSearch("apple"); // Only "apple" will execute after 100ms!

console.log("=== Testing Throttle ===");
const onScroll = throttle((pos) => {
  console.log("Throttled scroll handled at:", pos);
}, 80);

onScroll(10);
onScroll(20);
onScroll(30);
setTimeout(() => onScroll(100), 120);

