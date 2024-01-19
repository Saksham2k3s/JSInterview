// What is filter methode ? 
// filter method takes each element in array and apply
// condition check with each element of array if element
// pass with the condition it return the element to new array else not
// functions takes 3 arguments 
// 1. element 2. index, 3. the acctual array

const num = [1,2,3,4,5];

const morethan2 = num.filter((ele)=>{
    return ele > 3;
})

console.log(morethan2);

// polyfill for Filter (making from scratch)

// Array.prototype.myFilter = function (cb) {       // Adds myMap method to the Array prototype in the current file.
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {   // this refers to the parent array
//         if(cb(this[i], i, this)){
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// const polyfillarr = num.myFilter((ele, i, num) => {
//     return ele > 3;
// })

// console.log(polyfillarr);



Array.prototype.myFilter = function(cb){
    let temp = [];

    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const myNewFilterArray = num.myFilter((ele, idx, num) => {
     return ele % 2 == 0;
})

console.log('this is my own filter array');
console.log(myNewFilterArray);