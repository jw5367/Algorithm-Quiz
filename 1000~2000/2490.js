const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let result;

for(i = 0; i < input.length; i++){
  let plus = 0;
  let inputNum = input[i].split(' ').map(Number);

  for(j = 0; j < 4; j++){
    plus += inputNum[j];
  }
  
  if(plus === 4){
    result = 'E';
  }else if(plus === 3){
    result = 'A';
  }else if(plus === 2){
    result = 'B';
  }else if(plus === 1){
    result = 'C';
  }else if(plus === 0){
    result = 'D';
  }
  console.log(result);
}