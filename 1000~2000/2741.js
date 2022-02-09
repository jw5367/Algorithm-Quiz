const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = '';

for(i = 1; i<= input; i++){
  num += i + '\n';
}
console.log(num);