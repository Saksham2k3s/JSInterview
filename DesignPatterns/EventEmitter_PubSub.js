// ==========================================
// DESIGN PATTERN: Event Emitter / Pub-Sub
// (Extremely frequent frontend interview question)
// ==========================================

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);

    // Return unsubscribe function for convenience
    return () => this.off(eventName, callback);
  }

  // Unsubscribe from an event
  off(eventName, callback) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
  }

  // Emit event, calling all registered listeners
  emit(eventName, ...args) {
    if (!this.events[eventName]) return;
    // Slice to avoid issues if listeners unsubscribe during dispatch
    this.events[eventName].slice().forEach((cb) => cb(...args));
  }

  // Subscribe to an event ONCE
  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(eventName, wrapper);
    };
    return this.on(eventName, wrapper);
  }
}

// --- Test Cases ---
const emitter = new EventEmitter();

function handleMessage(data) {
  console.log("Received message:", data);
}

const unsubscribe = emitter.on("message", handleMessage);
emitter.emit("message", "First notification");

unsubscribe();
emitter.emit("message", "Second notification (will not log)");

// Testing .once()
emitter.once("connect", (user) => {
  console.log(`User ${user} connected (runs only once!)`);
});

emitter.emit("connect", "Saksham");
emitter.emit("connect", "Saksham"); // Does not fire

