const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let sum = '';

for(i = 1; i <= input; i++){
sum += "*";
console.log(sum);
}