const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

let inputNum = input.sort((a, b) => a - b);
const [A, B, C] = [inputNum[0], inputNum[1], inputNum[2]];
let value;

if(A===B && B===C ){
 value = 10000 + A *1000;
}else if(A===B || B===C){
  value = 1000 + B * 100;
}else if(A !== B && B !== C){
  value = C * 100;
}

console.log(value);