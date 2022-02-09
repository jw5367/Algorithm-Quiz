const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ");

let sortInput = input.sort((a, b) => a - b);
console.log(sortInput[1]);