// Q.1 What will output of this code 

let count = 0;
(function perCount(){
    if(count === 0){
        let count = 1;             // This count will shadow the outer count
        console.log(count);
    }
    console.log(count);
})();


// Q.2 Write a function that would allow you to do this

// var addSix = createBase(6);
// addSix(10);         return 16
// addSix(15)          return 21


function createBase(num){
    return function (num2){
        return num + num2;
    }
}

var addSix = createBase(6);
console.log(addSix(10) );        
console.log(addSix(15));  