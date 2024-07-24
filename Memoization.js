// Memoization is a optimization technique that can used to reduced the 
// time-consuming calculation and storing the previous result to somthing
// called cache and returning the result from it

// const calc = (n) => {
//     let sum = 0;
//   for(let i = 1; i <= n; i++){
//     sum += i;
//   }
//   return sum;
// }

// const memo = (func) => {
//     let cache = {};

//     return function(n){
//         //if already done the cal before so we directly return this from cache
//         if(n in cache){
//             console.log("We have already perform the calculation");
//             return cache[n];
//         }
//         else{
//             ///else we perform the calc and save it to the cache for further use
//             console.log("Performing first time")
//             let result = func(n);
//             cache[n] = result;
//             return result;
//         }
  
//     }

// }



// const memoFunc = memo(calc);

// memoFunc(5);
// memoFunc(5);
// memoFunc(6);

// console.log(calc(5));
// console.log(calc(5));

const calc = (n) => {
     let sum = 0;
     for(let i = 1; i <=n; i++){
        sum += i;
     }
     return sum;
}

const memo = (cb) => {
    let cache = {};

    return function(n){
      //if n is already in the cache so just return the answer form cache

      if(n in cache){
        console.log("Already perform the calulation and returning it from cache");
        return cache[n];
      }else{
        console.log("Doing calculation very first time!");
        const res = cb(n);
        cache[n] = res;
        return cache[n];
      }

      // otherwise first perfom the operation and save the value in cache and return it
    }
}

const memoFunc = memo(calc);

console.log(memoFunc(3));
console.log(memoFunc(4));
console.log(memoFunc(4));






