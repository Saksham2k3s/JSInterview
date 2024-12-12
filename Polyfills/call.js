
const obj = {
    name : "Saksham",
    age : 21
}

function myFunc(){
  console.log("My name is", this.name);
}


Function.prototype.myCall = function(context = {}, ...args){
   if(typeof this !== 'function'){
     console.log("Can't call with this");
     return
   }
 
   context.fn = this;
   context.fn(...args);

} 

myFunc.myCall(obj);