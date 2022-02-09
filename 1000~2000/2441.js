const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = Number(input);
let value = '';

for(i = 0; i < Number(input); i++){

  for(j = 0 ; j < num; j++){
    value += '*';
  }
  value += '\n';
  for(j = 0; j <= i; j++ ){
    value += ' ';
  }
  num = num - 1;
}
process.stdout.write(value);

