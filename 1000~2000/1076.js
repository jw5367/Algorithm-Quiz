const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

const colors = ['black', 'brown', 'red','orange','yellow','green','blue','violet','gray','white'];

let a = colors.indexOf(input[0]).toString();
let b = colors.indexOf(input[1]).toString();
let c = colors.indexOf(input[2]);

let plusAB = a + b;
let result = Number(plusAB) * (10 ** c);
console.log(result);