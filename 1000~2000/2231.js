const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let inputNum = parseInt(input);
let result = 0;

for(i = 0; i < inputNum; i++){
  let sum = 0;
  let stringI = i.toString();

  for(j = 0; j < stringI.length; j++){
    sum += parseInt(stringI[j]);
  }
  sum += i;
  if(sum == inputNum){
    result = i;
    break;
  }
}
console.log(result);