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


function createBase(num1){
    return function (num2){
        return num1 + num2;
    }
}

var addSix = createBase(6);
console.log(addSix(10));        
console.log(addSix(15)); 


//Q.3 How will you print number from 1 to 4 without using let 

for(var i = 1; i <= 5; i++ ){

    // closures
    function inner(i){
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    inner(i);               // every time i pass to this function its not going to refrence
}                           // from memeory


// Q.4 How will you create private counter using closures

function counter(){
  var _counter = 0                          // we use _ to decalre it private
  function add(increment){
      _counter += increment;
  }
  function retrive(){
    return "Counter = " + _counter;
  }

  return {
    add, retrive
  }
}

const c = counter();
c.add(5)
c.add(10);
console.log(c.retrive());

// Q.5 What is module pattern ?

var Module = (function(){
      function privateFunc(){
        console.log("Private"); 
      }

      return {
        pulblicFunc(){
            privateFunc()
          console.log("Public");
        },
      };
})()

Module.pulblicFunc();
