// What are arrow functions ?

// Arrow functions were introduced in ES6 They are kind of simple functions  

// Q.1 Difference b/w arrow and simple function

//1.  syntax

const add = (num1, num2) => {
  return num1 + num2;
}

console.log(add(2,3));

// 2. Implicite return keyword

const sub = (num1, num2) => num1 - num2;

//3. arguments

function fn(){
    console.log(arguments);
}

fn(1,2,3,4,5);

const fn1 = () =>{                        // We can't use arguments keyword inside arrow function
    console.log(arguments);
}

fn1(1,2,3,4,5);

//4. this keyword

let user = {
    username: "Saksham Shrivastava",
    rc1: () => {
        console.log("The user name is " + this.username);        // it will give username undefined
    },
    rc2(){
        console.log("The user name is " + this.username);
    },
}

user.rc1()
user.rc2()