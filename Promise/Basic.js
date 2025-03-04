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

function getMessage(username){
    setTimeout(() => {
        console.log(`this is ${username}!`);
        return `this is ===> ${username}`;  
    }, 1000);
}


const print = async () => {
const message = getMessage("saksham");
console.log(message);  
console.log('stop');
 }

 print()

// this will print undefined in the log because getMessage func is asyncronous function and 
// run after 1 s. to resolve this we can use callback

// function getMessage(username, cb){
//     setTimeout(() => {
//      cb(`This is ${username}`)
//     }, 1000);
// }


//  getMessage("saksham", function cb(message){
//     console.log(message);
// });

// console.log('stop');

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


const firstPromiseFunction = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("First promise is resolved now!");
        resolve();
      }, 2000);
   }) 
}

const secondPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Second promise is resolved now!");
        resolve();
        }, 2000);
    })
}

const ThirdPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Thired promise is rejected now!");
        reject();
        }, 2000);
    })
}


firstPromiseFunction().then(() => {
   return secondPromiseFunction()
}).then(() => {
   return ThirdPromiseFunction()
}).catch(() => {
    console.log("I am rejected!");
})


var promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "one");
});
  var promise2 = new Promise(function (resolve, reject) {
    setTimeout(reject, 100, "two");
});


  
  Promise.race([promise1, promise2]).then(function (value) {
    console.log("Value is resolved with val", value); // "two" // Both promises will resolve, but promise2 is faster
  }).catch((error) => {
      console.log("Promise is rejected noew",error);
  });



