// =========================================================================
// MASTER JAVASCRIPT POLYFILLS CHEATSHEET
// Array, Function, Promise, Utilities & Timers
// =========================================================================

// -------------------------------------------------------------
// 1. Array.prototype.myMap
// -------------------------------------------------------------
Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// -------------------------------------------------------------
// 2. Array.prototype.myFilter
// -------------------------------------------------------------
Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// -------------------------------------------------------------
// 3. Array.prototype.myReduce
// -------------------------------------------------------------
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");
  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = arguments.length >= 2 ? initialValue : this[0];
  let startIndex = arguments.length >= 2 ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

// -------------------------------------------------------------
// 4. Function.prototype.myCall
// -------------------------------------------------------------
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") throw new TypeError(this + " is not callable");
  context = context ?? globalThis;
  context = Object(context);
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

// -------------------------------------------------------------
// 5. Function.prototype.myApply
// -------------------------------------------------------------
Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") throw new TypeError(this + " is not callable");
  context = context ?? globalThis;
  context = Object(context);
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  const result = args ? context[fnSymbol](...args) : context[fnSymbol]();
  delete context[fnSymbol];
  return result;
};

// -------------------------------------------------------------
// 6. Function.prototype.myBind
// -------------------------------------------------------------
Function.prototype.myBind = function (context, ...initialArgs) {
  if (typeof this !== "function") throw new TypeError(this + " is not callable");
  const fn = this;
  function bound(...laterArgs) {
    const isNew = this instanceof bound;
    return fn.apply(isNew ? this : context, [...initialArgs, ...laterArgs]);
  }
  if (fn.prototype) bound.prototype = Object.create(fn.prototype);
  return bound;
};

// -------------------------------------------------------------
// 7. Promise.myAll
// -------------------------------------------------------------
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const items = Array.from(promises);
    if (items.length === 0) return resolve([]);
    const results = new Array(items.length);
    let completed = 0;
    items.forEach((p, idx) => {
      Promise.resolve(p).then(
        (val) => {
          results[idx] = val;
          if (++completed === items.length) resolve(results);
        },
        (err) => reject(err)
      );
    });
  });
};

// -------------------------------------------------------------
// 8. Custom setInterval using setTimeout
// -------------------------------------------------------------
function createCustomInterval() {
  let idCounter = 0;
  const map = new Map();

  function mySetInterval(fn, delay, ...args) {
    const id = ++idCounter;
    function run() {
      map.set(
        id,
        setTimeout(() => {
          fn(...args);
          if (map.has(id)) run();
        }, delay)
      );
    }
    run();
    return id;
  }

  function myClearInterval(id) {
    if (map.has(id)) {
      clearTimeout(map.get(id));
      map.delete(id);
    }
  }

  return { mySetInterval, myClearInterval };
}

// Quick validation
console.log("Map Polyfill:", [1, 2, 3].myMap((x) => x * 2)); // [2, 4, 6]
console.log("Filter Polyfill:", [1, 2, 3, 4].myFilter((x) => x % 2 === 0)); // [2, 4]
console.log("Reduce Polyfill:", [1, 2, 3, 4].myReduce((acc, x) => acc + x, 0)); // 10
