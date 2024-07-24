// Q.1 What will output

const obj = {
    a : "one",
    b : "two",
    a : "Three"            // This a will override the previous one put it remains on its first position
}

console.log(obj);

// Q.2 Create a function mulByTwo(obj2) that multiply all the numeric field by 2

let obj2 = {
    a : 200,
    b : 300,
    c : "Saksham"
}

function mulByTwo(obj2){
    for(key in obj2){
        if(typeof obj2[key] === "number"){
            obj2[key] *= 2;
        }
    }
}

mulByTwo(obj2)

console.log(obj2);

//Q.3 What will be the output of this code ?

const a = {}
const b = {key : "b"};
const c = {key : "c"};

a[b] = 123;      
a[c] = 456;

console.log(a[b]);   // when we try to add b which is object itself it will converted to string "Object Object" as key;
console.log(a[c]);   // it will set the value of "Object Object " to 456 i.e. it will overlap the a[b];

// Q.4 What will be the output of this code ?

const obj3 = {1: "a", 2: "b", 3: "c"};
const set = new Set([1,2,3,4,5]);

obj3[set] = "hello";

console.log(obj3);

// Q.5 What are JSON.stringfy() and JSON.parse() ?

// These methods are commonly used when you need to exchange 
// data between a server and a web browser, as JSON is a lightweight 
// data interchange format that is easy for both humans to read and write, 
// and easy for machines to parse and generate.

const obj4 = {
    name : "Saksham",
    age : 20
}

const strobj = JSON.stringify(obj4);
console.log(strobj);                // it will convert our obj to string obj

// but when we try to access strobj.name it will give undefined 

console.log(strobj.name);         

console.log(JSON.parse(strobj));

// Q.6 What will output of this code

const obj5 = {
    name : "Saksham",
    age : 20
}

const admin = {admin : true, ...obj5}                  // sperade operator will spread the obj5 in admin
console.log(admin);

// Q.7 What will output of this code

const settings = {
    username : "Saksham",
    health : 90,
    level : 10
}

const newset = JSON.stringify(settings, ["health", "level"]);      // here we are only specifying that only convert the health and level to string
console.log(newset);

// Q.8 What will output of this code

const shape = {
    radius : 10,
    diameter(){
         return 2 * this.radius        // in the anomious func the this keyword will automatically bind into this to obj in which the fucntion 
    },
    permeter : () => {
        return 3 * this.radius;        // in arrow func the this keyword refer to window obj
    }
}

console.log(shape.diameter());
console.log(shape.permeter());

//Q.9 What will output of this code

let cc = {greeting : "Hey!"}
let d;
d = cc;
cc.greeting ; "Hello";
console.log(d.greeting);  // d.greeting will also show the Hello because we are not copying the cc to d we are only giving the reference of cc to d

//Q.10 What will output of this code

console.log({a : 1} == {a : 1});
console.log({a : 1} == {a : 1});  // They will give false because object are only same when they are refering to same space in memory


const obj6 = {
   name : "saksham",
   age : 21,
}

for(key in obj6){
    console.log(key, obj6[key]);
}