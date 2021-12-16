const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let plus = 0;

for(i = 0; i < Number(input[0]); i++){
  let num = input[1].split('').map(Number);
   plus += num[i];
}
console.log(plus);