const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let num = Number(input[0]);

for(i = 1; i <= num; i++){
  let count = 0;
  let sum = 0;

  for(j = 0; j < input[i].length; j++){
    if(input[i][j] === 'O'){
       count++;
    }else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}