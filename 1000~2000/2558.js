const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");


let plusNum = +input[0] + +input[1];
console.log(plusNum);