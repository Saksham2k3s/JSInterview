
// Map Polyfill
const myArr = [1,2,3,4];

Array.prototype.myMap = function(cb){
    let temp = [];

    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }

    return temp;
}

const maparr = myArr.myMap((ele, idx, arr) => {
    return ele * ele;
})

console.log("This is my map polyfill", maparr);


// Filter Method Polyfill


Array.prototype.myFilter = function(cb){
    const temp = [];
   
    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const filterArr = myArr.myFilter((ele, idx, arr) => {
    return ele > 2;
})

console.log("This is my Filter polyfill", filterArr);


// reduce method Polyfill

Array.prototype.myReduce = function(cb, initialVal){
    let accumlator = initialVal;
    

    for(let i = 0; i < this.length; i++){
        accumlator = accumlator === undefined ? this[i] : cb(accumlator, this[i], i, this);
         
    }

    return accumlator;
}

const reduceArr = myArr.myReduce((ac, ele, idx, arr) => {
        return ac * ele;
})

console.log("This is my reduce", reduceArr);


// Polyfill for call

const obj  = {
    name : "Saksham",
    age : 20
}

function myCallFun(){
    console.log(`This is my call method polyfill and this is created by ${this.name}`);;
}

Function.prototype.myCall = function(context = {}, ...args){

    if(typeof this !== 'function'){
        throw new Error(this + 'is not callable');
    }

    context.fn = this;
    context.fn(...args);
}

myCallFun.myCall(obj)


// Polyfill for call

debugger
function myApplyFun(speed, message){
    console.log(`This is my call method polyfill and this is created by ${this.name} speed ${speed}, message ${message}`);;
}

Function.prototype.myApply = function(context = {}, args){

    if(typeof this !== 'function'){
        throw new Error(this + 'is not callable');
    }

    if(!Array.isArray(args)){
        throw new Error('This is not array'); 
    }

    context.fn = this;
    context.fn(...args);
}

myApplyFun.myApply(obj, [200, 'code']);

//setTimeout Polyfill

function createSetTimeout(){
   var timeId = 0;
   var timeMap = {};
   function setTimeoutPolyfill(cb, delay){
      var id = timeId++;
      timeId[id] = true;
      var start = Date.now();
      function triggerCallback(){
        if(!timeMap[id]) return;
        if(Date.now() > start + delay){
            cb();
        }else{
            triggerCallback();
        }
      }

      triggerCallback();
      return id;
   }

   function clearSetTimeoutPolyfill(id){
    delete timeId[id];
   }

   return { setTimeoutPolyfill, clearSetTimeoutPolyfill }
}

var { setTimeoutPolyfill, clearSetTimeoutPolyfill } = createSetTimeout();
console.log('start');
var myfun = setTimeoutPolyfill(function(){
  console.log('I am set time out');
},1);

console.log('End');


