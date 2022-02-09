const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = Number(input);
let sum;
let i = 0 ;

while (true){
   i++;
   sum = Math.floor(num/10) + num % 10;
   num = (num % 10) * 10 + sum % 10;
   if(Number(input) === num){
     break;
   }
}
console.log(i);