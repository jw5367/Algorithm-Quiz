const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let firstNum = BigInt(input[0]);
let secondNum = BigInt(input[2]);

let value = 0;

if(input[1] === "*"){
  value = firstNum * secondNum; 
}else{
  value = firstNum + secondNum;
}
console.log(String(value));