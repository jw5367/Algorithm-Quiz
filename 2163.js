const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let nm = input[0] * input[1];

console.log(nm - 1);
