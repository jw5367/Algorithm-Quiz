const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

let width = input[2] - input[0];
let length = input[3] - input[1];
let value = 0;

if(width < length){
  value += width;
}else {
  value += length;
}

if(input[0] < value){
  value = input[0];
}
if(input[1] < value){
  value = input[1];
}
console.log(value);