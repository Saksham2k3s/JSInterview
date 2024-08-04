// Q.1 What is function  ?
// They are sets of instructions that perform a specific task
// or calculation when called. You can reuse a function throughout your code, 
// making it more organized and efficient.

// Q.2 What is function expressions ?

// when we store a function inside of variable is called function expressions
// function expressions are assigned to a variable

const square = function (num){   // this is anomious function (because of no name of function)
    return num*num;
}

console.log(square(5));


// Q.3 What are first class functions ?

// A functions which are treated as varible are known as FCF.

 function sum(num1, num2){
    return num1 + num2;
}

function displaySum(fn){
   console.log("Sum of values are ", fn(4,5));
}

displaySum(sum);


// Q.4 What is IIFE ?
// IIFE is stand for imedeatly invoked function expressions 
(function mul(num){
  return num * num;
})()

// Q.5 What will the output of this code ?

(function (x){                            // The output of this code is one coze first it search x for inner x = 1
 return (function (y){ 
    const x = 9;                            // sope but when it unable to search in inner block it will search for
  console.log(x);                           // outside block 
 })(2);
})(1);