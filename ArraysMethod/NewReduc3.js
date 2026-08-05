data = new Array(111111).fill().map((a,n) => n);

const f1 = (a) => a % 2;
const f2 = (a) => a % 5;
const f3 = (a) => a < 347;
const filters = [f1, f2, f3];

var res = filters.reduce((d, f) => d.filter(f) , data);

console.log(res);