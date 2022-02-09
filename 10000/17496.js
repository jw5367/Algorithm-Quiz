const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

let sum = 1;
let count = 0;

while(true){
sum += input[1];

if(sum <= input[0]){
  count++;
}else if(sum > input[0]){
  break;
}
}
let value = count * input[2] * input[3];
console.log(value);