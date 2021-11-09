const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let rOne = input[0];
let s = input[1];

console.log(s*2-rOne);