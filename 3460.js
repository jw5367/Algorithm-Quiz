const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(BigInt);


for(i = 1; i <= input[0]; i++){

  let num = input[i];
  let answer = [];
  let j = 0;

while (num !== 0n) {
  let value = num % 2n;
  num = num / 2n;
  if(value === 1n){
    answer.push(j);
  }
  j++;
}

console.log(answer.join(' '));
}