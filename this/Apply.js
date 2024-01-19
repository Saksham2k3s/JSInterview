// What is Apply ?

// Apply method is same as the call method
// the only different is that it takes a list of argument

obj = {name : "Saksham"};

function sayHello(age, profession){
    return "Hello my name is " + this.name + "he is " + age + "and he is " + profession;
}

console.log(sayHello.apply(obj, [24, "Frontend Developer"])); 