const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split('');

let count = 0;
let value = 0;
let inputLen = Number(input.length);

for(i = 0; i < Math.round(inputLen / 2); i++){
  if(input[i] === input[inputLen-(i+1)]){
    count += 1;
  }
}

if(count === Math.round(inputLen / 2)){
  value = 1
}else{
  value = 0;
}
console.log(value);
