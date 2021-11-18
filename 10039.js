const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

let plus = 0;

for(i = 0; i < input.length; i++){
 if(input[i] <= 40){
   input[i] = 40;
 }
 plus += input[i];
}
let value = plus / 5;
console.log(value);