const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let max = 0;
let winner = 0;

for(i = 0; i < 5; i++){
const num  = input[i].split(' ').map(Number);
let plus = 0;
for(j = 0; j < 4; j++){
  plus += num[j];
}
if(plus > max){
  max = plus;
  winner = i + 1;
}
}
console.log(winner, max);