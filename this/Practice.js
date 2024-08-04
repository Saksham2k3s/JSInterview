// Q.1 What will be output of this code

const user = {
    firstName : "Saksham",
    getName(){
       const firstName = "Saksham 😄" // it will show the Saksham this will refer to the object in which function is
       console.log(this.firstName);
    }
}

user.getName();


// Q.2 What will be output of this code

function makeUser(){
    return {
        name : "Anuj",
        ref : this
    }
}

const us = makeUser(); // when we are calling makeUser function it is in globle scope and pointing to window object and inside the window object there is anything called name 

console.log(this.name);

// Q.3 What will log in the console

const obj = {
    name : "Anuj",
    getName(){
        console.log(this.name);
    }
}

setTimeout(() => obj.getName(), 2000);

// Q.4 Create an object calculator


const calculator = {
    read(){
        this.a = prompt("Enter the first number");
        this.b = prompt("Enter the second number");
    },
    sum(){
        console.log(this.a + this.b);
    },
    mul(){
        console.log(this.a * this.b);
    }
}

// calculator.read();  // it will read two numbers form user
// calculator.sum();   // it will add two numbers
// calculator.mul();   // it will multiply two numbers

// Q.5 What will the output of this code

const obj2 = {
    name : "Abhi",
}

function sayHello(){
    console.log("h9999");
    console.log(this.name);
}

console.log(sayHello.call(obj2));
const a = sayHello.bind(obj2); // bind method will return the sayHello function


// Q.6 Call printAnimals such that it print all the animals in the object

const animals = [
    {name : "dog"},
    {name : "cat"},
    {name : "cow"}
]

function printAnimals(i){
  this.print = function(){
    console.log("# " + i +  " " + this.name);
  }
  this.print()
}

for(let i = 0; i < animals.length; i++){
    printAnimals.call(animals[i], i)
}

// Q.7 Append an array to another array

const array = [1,2,3,4];
const array2 = [5,6,7];

for(let i = 0; i < array2.length; i++){
    array.push(array2[i])
}

console.log(array.length);

// Q.8 Find min/max element form array using apply method

console.log(Math.max.apply(null, array));
console.log(Math.min.apply(null, array));

// Q.9 what will the output of this code

function f(){
    console.log(this.name);
}

f = f.bind({name : "Mohan"}).bind({name : "Sohan"});

f()  // if a function is bind with a function after that we can't bind it with another so it will give mohan

const obj3 = {
    name : "Saksham",
    innerOnj : {
        name : "Sakshi",
        meth : () => {
            console.log("This is my question");
            console.log(this);
        }
    }
}

obj3.innerOnj.meth()