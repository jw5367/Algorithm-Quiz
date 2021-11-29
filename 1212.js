const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split('');

let num = input.map(BigInt);
let array = [4n, 2n, 1n];
let value = [];
let plus = 0n;

for(i = 0; i < num.length; i++){
  for(j = 0; j < array.length; j++){
    if(num[i] - array[j] >= 0){
      value += '1';
      num[i] = num[i] - array[j];
    }else{
      value += '0';
    }
    plus += num[i];
    if(plus == 0){
      value = 0;
    }
    
  }
}
if(value[0] === '0'){
  value = value.replace(/(^0+)/, "");
}

console.log(value);