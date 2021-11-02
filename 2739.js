const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = Number(input);

for( i = 1; i <= 9; i++ ){
  num = input * i
  console.log(`${input} * ${i} = ${num}`);
}