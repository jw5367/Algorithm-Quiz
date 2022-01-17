const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = parseInt(input);
let result = 0;

for(i = 0; i < num; i++){
  let sum = 0;
  let value = i;
  let stringValue = value.toString();

  for(j = 0; j < stringValue.length; j++){
    sum += parseInt(stringValue[j]);
  }
  sum += value;
  if(sum == num){
    result = value;
    break;
  }
}
console.log(result);