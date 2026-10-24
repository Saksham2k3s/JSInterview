// =======================================================
// JAVASCRIPT DESIGN PATTERNS: INTERVIEW FAVORITES
// =======================================================

// -------------------------------------------------------------
// 1. Singleton Pattern
// Ensures a class has only ONE instance and provides a global access point to it.
// -------------------------------------------------------------
class DatabaseConnection {
  constructor(uri) {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.uri = uri;
    this.isConnected = true;
    DatabaseConnection.instance = this;
  }

  query(sql) {
    return `Executing "${sql}" on ${this.uri}`;
  }
}

const db1 = new DatabaseConnection("mongodb://localhost:27017/app");
const db2 = new DatabaseConnection("mongodb://remote-server:27017/app");

console.log("=== Singleton Pattern ===");
console.log("Are db1 and db2 the same instance?", db1 === db2); // true
console.log("Connected URI:", db2.uri); // "mongodb://localhost:27017/app" (not the remote one)


// -------------------------------------------------------------
// 2. Module Pattern (Revealing Module Pattern)
// Encapsulates private state and private functions using closures and IIFEs.
// -------------------------------------------------------------
const ShoppingCart = (function () {
  // Private variables and functions
  let cart = [];

  function calculateTax(subtotal) {
    return subtotal * 0.18;
  }

  // Public API returned to outside world
  return {
    addItem(item, price) {
      cart.push({ item, price });
      console.log(`Added ${item} ($${price}) to cart.`);
    },
    getTotal() {
      const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
      const tax = calculateTax(subtotal);
      return {
        subtotal,
        tax,
        total: subtotal + tax,
      };
    },
    getItemCount() {
      return cart.length;
    },
  };
})();

console.log("\n=== Module Pattern ===");
ShoppingCart.addItem("Mechanical Keyboard", 100);
ShoppingCart.addItem("Gaming Mouse", 50);
console.log("Cart summary:", ShoppingCart.getTotal());
console.log("Can we directly access cart array?", ShoppingCart.cart); // undefined (encapsulated!)


// -------------------------------------------------------------
// 3. Observer Pattern
// One-to-many dependency where state changes automatically notify all observers.
// -------------------------------------------------------------
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    return () => {
      this.observers = this.observers.filter((observer) => observer !== fn);
    };
  }

  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

console.log("\n=== Observer Pattern ===");
const newsChannel = new Subject();

const unsubEmail = newsChannel.subscribe((headline) => {
  console.log(`[Email Notification]: Breaking News - ${headline}`);
});
newsChannel.subscribe((headline) => {
  console.log(`[Push Notification]: Breaking News - ${headline}`);
});

newsChannel.notify("JavaScript ES2026 released!");
unsubEmail();
newsChannel.notify("Second update (Email unsubscribed)");

