const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let num = input.map(Number);
let array = [];
let plus = 0;

for(i = 0; i < input.length; i++){
  if(num[i] % 2 !== 0){
    array.push(num[i]);
    array.sort((a, b) => a - b);
    plus += num[i];
  }
}
if(plus === 0){
  console.log(-1);
}else {
  console.log(plus);
  console.log(array[0]);
}
