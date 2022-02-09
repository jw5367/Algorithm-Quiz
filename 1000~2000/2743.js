const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

const splitInput = input.split('');

console.log(splitInput.length);