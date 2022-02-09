const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let number = parseInt(input, 16);
console.log(number);