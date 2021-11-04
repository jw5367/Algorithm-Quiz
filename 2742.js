const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = '';

for(i = 0 ; i < input; i++){
  num += input - i + '\n';
}
console.log(num);