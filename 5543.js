const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let burger = [input[0], input[1], input[2]];
let drink = [input[3], input[4]];

let one = burger.sort((a, b)=>a-b);
let two = drink.sort((a, b)=>a-b);

let value = Number(one[0]) + Number(two[0]) - 50;

console.log(value);
