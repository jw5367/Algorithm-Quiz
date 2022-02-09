const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

let num = 0;

for(i = 0; i < input.length; i++){
  let value = input[i] * input[i];
  num += value;
}
let value = num % 10
console.log(value);