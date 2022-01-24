const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

const minusInput = 1000 - Number(input);
const num = String(minusInput).padStart(3, '0').split('').map(Number);

let value = 0;

const change = function(eachNum){
  let count = 0;
  count += Math.floor(eachNum / 5);
  eachNum = eachNum - (5 * count);
  count += Math.floor(eachNum / 1);
  value += count;
}

for(i=0; i<3; i++){
  change(num[i]);
}

console.log(value);
