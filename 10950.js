const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

for(let i = 1; i <= input[0]; i++){
  let numbers = input[i].split(' ');
  
  console.log( Number(numbers[0]) + Number(numbers[1]) );
}