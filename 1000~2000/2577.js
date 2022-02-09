const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let num = String(input[0] * input[1] * input[2]);

for(let i = 0 ; i <= 9; i++){
  let count = 0;
  for(j = 0; j < num.length; j++){
    if (Number(num[j]) === i){
      count++;
    }
  }
  console.log(count);
}