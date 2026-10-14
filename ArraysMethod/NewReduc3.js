Array.prototype.polyReduce = function(cb, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let start = initialValue === undefined ? 1 : 0;

    for(let i = start; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this);
    }

    return accumulator;
}