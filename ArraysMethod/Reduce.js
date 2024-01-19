// What is reduce ?
// reduce method is used to reduce the array to a single value
// by applying function to each element of array

// What is Accumulator
// an accumulator is a variable that is used to accumulate or aggregate 
// values during the process of reducing or folding a collection (such as an array or 
// a list) into a single value.

// reduce function takes callback function and this callback
// function takes 4 arguments 
// 1. accumulator, 2. current element, 3. current index, 4. the actual array

const num = [1, 2, 3, 4, 5];

const sum = num.reduce((accumulator, ele, idx, arr) => {
    return accumulator + ele;
}, 0);

console.log(sum);

// polyfill for reduce (making from scratch)

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    const startIdx = initialValue === undefined ? 1 : 0;

    for (let i = startIdx; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this);
    }

    return accumulator;
}

const polyfillSum = num.myReduce((accumulator, ele) => {
    return accumulator + ele;
}, 0);

console.log(polyfillSum);
