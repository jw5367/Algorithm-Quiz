const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let max = 0;
let scoreAll = 0;
let inputNum = input[1].split(' ').map(Number);

for(i = 0; i < Number(input[0]); i++){
  if(inputNum[i] > max){
    max = inputNum[i];
  }
}

for(i = 0; i < Number(input[0]); i++){
scoreAll += inputNum[i]/max * 100;
}
let value = scoreAll/input[0]
console.log(value);