// Memoization is a optimization technique that can used to reduced the 
// time-consuming calculation and storing the previous result to somthing
// called cache and returning the result from it


const calc = (n) => {
    let sum = 0;
  for(let i = 0; i <= n; i++){
    sum += i;
  }
  return sum;
}

const memo = (func) => {
    let cache = {}
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log("cache");
            return cache[n];
        }else{
            console.log("Calculating first time");
            let result = func(n);
            cache[n] = result
            return result;
        }
    }
}

console.time()
const eff = memo(calc);
console.log(eff(5));
console.timeEnd()

console.time()

console.log(eff(5));
console.timeEnd()




