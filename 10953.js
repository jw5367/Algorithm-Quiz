const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

const T = input.shift();

for(i = 0; i < T; i++){
  let num = input[i].split(',').map(Number);
  console.log(num[0] + num[1]);
}