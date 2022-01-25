const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

let first = [];
let second = [];

for(i=0; i < input; i++){
  first.length = input;
  second.length = input;
  first.fill(' ');
  second.fill('*');
  for(j=0; j<input; j+=2){
    first[j] = '*';
    second[j] = ' ';
  }
  console.log(first.join(''));
  console.log(second.join(''));
}