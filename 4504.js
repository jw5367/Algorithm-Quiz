const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

let i = 1;

while (true) {
  if(input[i] % input[0] === 0){
    console.log(`${input[i]} is a multiple of ${input[0]}.`);
  }else{
    console.log(`${input[i]} is NOT a multiple of ${input[0]}.`);
  }
  i++;
  if(input[i] === 0){
    break;
  }
}