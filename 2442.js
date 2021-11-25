const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = Number(input);
let value = '';

for(i = 0; i < num; i++){
  for(j = 1; j < num - i; j++){
    value += ' ';
  }
  for(j = 0; j < i * 2 + 1; j++){
    value += '*';
  }
  value += '\n';
}
process.stdout.write(value);