// Q.1 How do you implement sum function like this sum(3)(4)(5)

function sum(a){
   return function(b){
    return function(c){
        console.log("Sum of a, b & c = ", a+b+c);
    }
   }
}

sum(3)(4)(5); 


// Q.2 Evaluate that 

//   evalute("sum")(4)(2) => 6
//   evalute("sub")(4)(2) => 2
//   evalute("mul")(3)(4) => 12
//   evalute("div")(12)(3) => 4

function evalute(oper){
  return function(a){
    return function(b){
        if(oper == "sum") return a+b;
        else if(oper == "sub") return a-b;
        else if(oper == "mul") return a*b;
        else if(oper == "div") return a/b;
        else return "Invelid operation";
    }
  }
}

console.log(evalute("oop")(5)(6));

// Q.3 Infinite Curring

 function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
 }

 console.log("Infinite Curring");
 console.log(add(2)(3)(4)(5)(6)(7)(8)(9)());

 // Q.4 Give me real world example of curring

 // We can use Curring to manipulating dom as well 

 function UpdateElementText(id){
  return function(text){
    document.querySelector("#" + id).textContent = text; 
  }
 }

 UpdateElementText("heading")("This is Saksham 1 2 3 4 5");
