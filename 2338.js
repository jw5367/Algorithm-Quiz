const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(BigInt);

let value = input[0] + input[1] + '\n';
value += input[0] - input[1] + '\n';
value += input[0] * input[1] ;

console.log(value);