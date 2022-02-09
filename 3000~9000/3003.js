const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ");

let white = ['1', '1', '2', '2', '2', '8'];

for(i = 0; i < 6; i++){
  let num = Number(white[i]) - Number(input[i]);
  process.stdout.write(num + " ");
}