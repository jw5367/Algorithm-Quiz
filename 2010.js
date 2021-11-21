const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

let count = 0;

for(i = 1; i <= input[0]; i++){
  count = count - 1;
  for(j = 0; j < input[i]; j++){
   count++;
  }
}
console.log(count + 1);