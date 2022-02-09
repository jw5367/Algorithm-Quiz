const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split('');

let value = 0;

for(i = 1; i <= input.length; i++){
  if(input[i-1] === input[i]){
    value += 5;
  }else{
    value += 10;
  }
}
console.log(value);