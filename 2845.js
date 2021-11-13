const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let num = input[0].split(' ').map(Number);
let sum = input[1].split(' ').map(Number);

let people = num[0] * num[1];
let array = [];

for(i = 0; i < sum.length; i++){
  let value = sum[i] - people;
  array.push(value);
}
console.log(array.join(' '));