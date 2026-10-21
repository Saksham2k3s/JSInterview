// ==========================================
// DOM INTERVIEW QUESTIONS & CONCEPTS
// ==========================================

/**
 * Q1: What is the difference between Event Bubbling and Event Capturing?
 * - Capturing (Trickling): Event travels down from Window -> Document -> html -> body -> Target.
 * - Target: Event reaches the exact element clicked.
 * - Bubbling: Event bubbles up from Target -> Parent -> ... -> Window.
 * By default, addEventListener listens in the BUBBLING phase. Pass { capture: true } for capturing.
 * 
 * Q2: What is the difference between:
 * - e.stopPropagation(): Prevents the event from traveling further up (or down) the DOM tree.
 * - e.stopImmediatePropagation(): Stops bubbling AND prevents other listeners on the SAME element from executing.
 * - e.preventDefault(): Cancels default browser behavior (e.g., following a link or submitting a form) without stopping propagation.
 * 
 * Q3: What is Event Delegation?
 * - Instead of attaching event listeners to multiple child elements, attach a single listener
 *   to a common parent element.
 * - Benefits:
 *   1. Memory optimization (fewer listeners in memory).
 *   2. Automatically works for dynamically added children without re-attaching listeners.
 * 
 * Q4: Reflow vs Repaint:
 * - Reflow (Layout): Browser recalculates element positions and geometry (e.g. changing width, fontSize, offsetTop). Expensive!
 * - Repaint: Browser paints pixels without changing geometry (e.g. changing color, background-color, visibility). Cheaper than reflow.
 * - Tip: Batch DOM writes, use DocumentFragment or display: none during bulk changes, use transform/opacity for GPU acceleration.
 * 
 * Q5: How to create and dispatch Custom Events?
 */

// Custom Event Example:
if (typeof EventTarget !== "undefined") {
  const emitter = new EventTarget();

  emitter.addEventListener("userLogin", (e) => {
    console.log("Logged in user:", e.detail.username);
  });

  const customEvent = new CustomEvent("userLogin", {
    detail: { username: "Saksham" },
  });

  emitter.dispatchEvent(customEvent);
}

