// What are objects ?

// In JavaScript, objects are one of the fundamental data types 
// and are used to store and organize data. An object is a collection 
// of key-value pairs, where each key is a string (or symbol) and each 
// value can be of any data type, including other objects. Objects in 
// JavaScript provide a way to structure and represent complex data.


const user = {
    name : "Saksham Shrivastava",
    age : 20
}

console.log(user.name);

// To Delete any key and value

delete user.age;
console.log(user);

// if we want key with space 
// we'll use double quarts for that 

const data = {
    name : "Saksham",
    age : 20,
    "Last Name" : "Shrivastava"
}

console.log(data["Last Name"]);                 // to access


// How to add key value pair dynamic

const property = "Address";
const address = "Gwalior";

const dynamic = {
    [property] : address
}

console.log(dynamic);

// How to itrate loop over obj

// using for in loop

for(key in data){
    console.log(key);
}