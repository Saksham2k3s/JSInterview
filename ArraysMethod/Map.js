// What is map ?
// map method is used to create a new array from an existing one
// by applying a function to each element of the array

// map function takes a callback function and this callback
// function takes 3 arguments 
// 1. element, 2. index, 3. the actual array

const num = [1, 2, 3, 4, 5];

const mul = num.map((ele, idx, arr) => {
    return ele * 3;
})

console.log(mul);

// polyfill for map (making from scratch)

// Array.prototype.myMap = function (cb) {       // Adds myMap method to the Array prototype in the current file.
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {   // this refers to the parent array
//         newArr.push(cb(this[i], i, this));
//     }
//     return newArr;
// }

// const polyfillarr = num.myMap((ele, i, num) => {
//     return ele * 3;
// })

// console.log(polyfillarr);

Array.prototype.myMap = function(cb) {
     let temp = [];
     for(let i = 0; i < this.length; i++){
        const square = cb(this[i], i);
        temp.push(square);
     }
     return temp;
}

let ans = num.myMap((ele, idx) => {
    return ele * ele;
});

Array.prototype.myMapFunc = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        const newEle = cb(this[i], i, this);
        temp.push(newEle);
    }

    return temp;
}

const array = [1,2,3,4,5];
array.myMapFunc((ele, idx, array) => {
   return ele * ele;
})

const newArray = [1,2,3,4,5];

Array.prototype.polyMap = function(cb) {
     const temp = [];

     for(let i = 0; i < this.length; i++) {
         const newEle = cb(this[i], i, this);
         temp[i] = newEle;
     }

     return temp;
}


newArray.polyMap((ele, idx, array) => {
    return ele * 2;
});

console.log('this is my own map array');

