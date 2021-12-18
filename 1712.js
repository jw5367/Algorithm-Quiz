const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

const A = input[0];
const B = input[1];
const C = input[2];
const margin = C - B;
const count =Math.floor( A / margin) + 1;
console.log(margin <= 0 ? -1 : count);