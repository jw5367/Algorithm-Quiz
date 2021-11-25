const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = Number(input);
let value = '';

for(i = 1; i <= num; i++){
  for(j = 0; j < (num * 2) - (i * 2 - 1); j++){
    value += '*';
  }
  value += '\n';
  for(j = 0; j < i; j++){
    value += ' ';
  }
}
process.stdout.write(value);