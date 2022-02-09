const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

const a = input[0];
const b = input[1];

Num1 = b % 10;
Num2 = Math.floor((b % 100) / 10);
Num3 = Math.floor(b / 100);

console.log(Num1 * a);
console.log(Num2 * a);
console.log(Num3 * a);
console.log(a * b);