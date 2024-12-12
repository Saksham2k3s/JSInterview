// The forEach loop in JavaScript is used to iterate over each item in an array.
//  It allows you to execute a function for each element in the array, 
//  but it does not return anything. 
//  It's commonly used when you want to perform an action 
//  (like printing or modifying something) but don't need the results in a new array.

const numbers = [1, 2, 3, 4];
numbers.forEach((number) => {
  console.log(number);  // Prints each number in the array
});

console.log(numbers);
