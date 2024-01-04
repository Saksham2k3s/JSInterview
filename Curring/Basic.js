// What is curring ?
// Currying in JavaScript is a technique where a function that takes multiple arguments is transformed 
// into a series of functions that each take a single argument. 
// In simpler terms, instead of calling a function with all its arguments at once, 
// you can call it with one argument at a time.


// for example

const func1 = function(x){
    return function(y){
        console.log(x, y);
    }
}

func1(4)(7);

// Why we use curring ?

// Thier are various reasones for using curring 
// 1. To make heigher order functions 2. To avoid passing same argument again and agian

