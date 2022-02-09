const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let value = input.charCodeAt(0);
console.log(value);