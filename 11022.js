const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let sum = '';

for(i =1 ; i <= input[0]; i++){
 let splitNum = input[i].split(' ');
 let value = Number(splitNum[0]) + Number(splitNum[1]);

 sum += `Case #${i}: ${Number(splitNum[0])} + ${Number(splitNum[1])} = ${value}` + '\n';

}
console.log(sum);