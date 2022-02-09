const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

let b = input[0] * input[1];
let value = b - (input[0] -1);

console.log(value);