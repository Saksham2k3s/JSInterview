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