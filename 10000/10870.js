const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

const inputNum = Number(input);
let num = 0, sum = 1, plusNum = 0;

if(inputNum <= 1){
  plusNum  = plusNum + inputNum;
}else{
  for(i = 1; i < inputNum; i++){
    plusNum = num + sum;
    num = sum;
    sum = plusNum;
   }
}

console.log(plusNum);