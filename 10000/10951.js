const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let i = 0;

while(true){
  let num = String(input[i]).split(' ').map(Number); 
  let plusNum = num[0] + num[1];
  i++;
  if(input.length + 1 === i){
    break;
  }
  console.log(plusNum);
}