// Hoisting => In simple words, hoisting in JavaScript means 
// that variable and function declarations are moved ("hoisted") 
// to the top of their containing scope during the compilation phase. 
// This allows you to use variables and functions in your code even before 
// they are declared in the source code. However, only the declarations are hoisted, 
// not the initializations.


//a declaretion move to top that why it will not give error
a = 10;
console.log(a);   //output  = 10;
var a;

//it will show the undefined coze only declration move to top not intialisation
console.log(b); //output = undefined;
var b = 10;

// var hoisting is deffernt form const and let varibles 
// it will give a reffrence error that can't access b before 
// initialaization 
// They will hoisted to temp deadzone not like a variable
// What is temp Deadzone ?
// temp deadzone is term to  describe state where variable are 
// are in the scope but not intialaize yet!


// function abcd(){
    
//     console.log(a,b,c);
//     var a = 30;
//     const b = 10
//     let c = 20
    
// }

// abcd()

// c = 100;
// console.log(c);

// let c = 40;


//Question no 5

console.log("Question no 5");

variable = 10;

(function fun(){
    foo = 100;
    console.log(variable);
    var foo = 20;
    variable = 10;
    console.log(variable);
})();

console.log(variable);

console.log(typeof typeof "stirng");
console.log(typeof Boolean);


//Functions property

function add(a, b){
    return a+b;
}

console.log(add.length); //show the number of params it is getting;

console.log(add.name); // Give the name of function

