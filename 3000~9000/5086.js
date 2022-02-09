const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

for(i = 0; i < input.length - 1; i++){
  let num = input[i].split(' ').map(Number);
  let multipleNum = num[0] % num[1];
  let factorNum = num[1] % num[0];

  if(factorNum === 0){
    console.log('factor');
  }else if(multipleNum === 0){
    console.log('multiple');
  }else if(factorNum !== 0 && multipleNum !== 0){
    console.log('neither');
  }

}