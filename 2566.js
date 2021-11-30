const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let maxNum = 0;
let yNum = 0;
let xNum = 0;

for(i = 0; i < 9; i++){
  let num = input[i].split(' ').map(Number);
  for(j = 0; j < 9; j++){
    if(maxNum < num[j]){
      maxNum = num[j];
      yNum = i;
      xNum = j;
    }
  }
}
console.log(maxNum);
console.log(yNum+1, xNum+1);