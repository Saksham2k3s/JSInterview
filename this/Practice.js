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