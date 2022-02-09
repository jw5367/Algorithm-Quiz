const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let num = input[1].split(' ').map(Number);
let min = num[0];
let max = num[0];

for(i = 0; i < Number(input[0]); i++){
  if(num[i] <= min){
    min = num[i];
  }
  if(num[i] >= max){
    max = num[i];
  }
}
console.log(min, max);