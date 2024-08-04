// What is call ?

// obj = {name : "Saksham"};

// function sayHello(){
//     return "Hello my name is " + this.name;
// }

// console.log(sayHello());  

// we know that here 'this' will refer to window object now to resolve this problem we use 
// call methode

obj = {name : "Saksham"};

function sayHello(...age){
    console.log(age);
    return "Hello my name is " + this.name + "he is " + age;
}

console.log(sayHello.call(obj, 24, 44, "saksham")); // the call method takes two argumenst one is object and 
// second is argument that we want to pass inside the function


// Polyfill for call

