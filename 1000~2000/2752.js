const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ");

const num = input.map(x => Number(x)).sort((a, b) => a - b);

console.log(num.join(" "));