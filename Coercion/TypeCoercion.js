// =======================================================
// JAVASCRIPT TYPE COERCION & EQUALITY QUIRKS
// =======================================================

/**
 * THE 3 CORE RULES OF COERCION:
 * 
 * 1. The '+' Operator:
 *    - If EITHER operand is a String (or converts to a string via ToPrimitive),
 *      it performs STRING CONCATENATION.
 *    - Otherwise, it converts operands to NUMBERS and performs addition.
 * 
 * 2. Arithmetic operators ('-', '*', '/', '%'):
 *    - ALWAYS convert both operands to NUMBERS.
 * 
 * 3. Loose Equality ('=='):
 *    - null == undefined is ALWAYS true (and nothing else loosely equals null or undefined).
 *    - If comparing Number and String, String is coerced to Number.
 *    - If comparing Boolean and any type, Boolean is coerced to Number (true -> 1, false -> 0).
 *    - If comparing Object and Primitive, Object is converted via ToPrimitive: valueOf() -> toString().
 */

console.log("=== 1. String vs Number Coercion ===");
console.log("1" + 2);          // "12"  (string concatenation)
console.log(1 + "2");          // "12"
console.log(1 + 2 + "3");      // "33"  (1+2=3, then "3"+"3"="33")
console.log("1" + 2 + 3);      // "123" ("1"+2="12", then "12"+3="123")
console.log("6" - 2);          // 4     ('-' triggers number conversion)
console.log("6" * "2");        // 12
console.log("6" / "2");        // 3
console.log("foo" - 1);        // NaN   (string "foo" fails number conversion)

console.log("\n=== 2. Arrays and Objects Coercion ===");
console.log([] + []);          // ""    ([] converts to "" -> "" + "" = "")
console.log([] + {});          // "[object Object]"
console.log([1, 2] + [3, 4]);  // "1,23,4" ([1,2].toString() is "1,2", [3,4].toString() is "3,4")
console.log(![]);              // false ([] is truthy object, so ![] is false)
console.log([] == ![]);        // true! ([] == false -> [] == 0 -> "" == 0 -> 0 == 0 -> true!)

console.log("\n=== 3. The Infamous 'null' Triangle ===");
console.log(null > 0);         // false (null coerced to number 0: 0 > 0 is false)
console.log(null == 0);        // false (loose equality rule: null only == undefined or null)
console.log(null >= 0);        // true! (relational operator coerces null to 0: 0 >= 0 is true!)

console.log("\n=== 4. Boolean & Nullish Comparisons ===");
console.log(true + false);     // 1     (1 + 0 = 1)
console.log(true + true);      // 2     (1 + 1 = 2)
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(typeof null);        // "object" (historic JS bug since 1995)

console.log("\n=== 5. NaN and Object.is() ===");
console.log(NaN === NaN);            // false (NaN is never equal to anything, even itself!)
console.log(Number.isNaN(NaN));      // true
console.log(Object.is(NaN, NaN));    // true
console.log(Object.is(+0, -0));      // false (+0 !== -0 under Object.is)
console.log(+0 === -0);              // true

