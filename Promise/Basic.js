// What is Promise?
// A JavaScript promise is like a commitment for a 
// future value or action. It allows you to continue with 
// your code while something is happening in the background, 
// and it notifies you when it's done, either successfully or with an error.

// What is Synchronous vs Asynchronous code ?

// When the code exitute line by line then it is called the synchronous code
// when the code will not run by line then it is called the aysnchronous code for ex

console.log("Start");

setTimeout(() => {
     console.log("This is timer");  // After 1 sec we will get "This is timer"
}, 1000);

console.log("Finish");

// Example 2

// function getMessage(username){
//     setTimeout(() => {
//         return `this is  ${username}`;  
//     }, 1000);
// }


// const message = getMessage("saksham");
// console.log(message);  
// console.log('stop');

// this will print undefined in the log because getMessage func is asyncronous function and 
// run after 1 s. to resolve this we can use callback

function getMessage(username, cb){
    setTimeout(() => {
     cb(`This is ${username}`)
    }, 1000);
}


 getMessage("saksham", function cb(message){
    console.log(message);
});

console.log('stop');

// Promise Question

const promise = new Promise((res, rej) => {
      setTimeout(() => {
        const result = false;
        if(result) res("Promise is resolved");
        else rej(new Error("promise is rejected now"));
      }, 2000);
})

promise.then((res)=>{
    console.log(res);
}).catch((error) => {
    console.log(error);
})