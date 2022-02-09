const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = Number(input);
let value = '';

for(i = 1; i <= num ; i++){
  for(j = 0; j < i; j++){
   value += '*';
  }
 for(j = 0; j < (num * 2) - (i * 2); j++){
   value += ' ';
 } 
 for(j = 0; j < i; j++){
  value += '*';
 }
  value += '\n';
}

for(i = 1; i <= num; i++){
  for(j = 0; j < num - i; j++){
    value += '*'; 
  }
  for(j = 0; j < 2 * i; j++){
    value += ' '; 
  }
  for(j = 0; j < num - i; j++){
    value += '*'; 
  }
  value += '\n';
}
process.stdout.write(value);