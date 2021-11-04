const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let sum = '';

for(i = 1 ; i <= input[0]; i++){ 
 
 let number = input[i].split(' ');
 let num = Number(number[0]) + Number(number[1]) + '\n'; 

 sum += "Case #" + i + ": " + num;
}

console.log(sum);