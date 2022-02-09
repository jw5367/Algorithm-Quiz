const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = input.split('');
let grades1 = ['F','D','C','B','A'];
let value = 0;

for(i = 0; i <= 4; i++){
  if(num[0] === grades1[i]){
    value = i;
  } 
}

if(num[1] === '+'){
  value += 0.3;
 }else if(num[1] === '0'){
  value += 0;
 }else if(num[1] === '-'){
  value -= 0.3;
 }

console.log(value.toFixed(1));