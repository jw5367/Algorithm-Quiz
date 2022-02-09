const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

let max = 0;
let maxNum = 0;

for(i = 0; i < input.length; i++){
  if(max < input[i]){
    max = input[i];
    maxNum = i+1;
  }
}
console.log(max)
console.log(maxNum);