const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ");

let plus = BigInt(input[0]) + BigInt(input[1]);
console.log(plus.toString());