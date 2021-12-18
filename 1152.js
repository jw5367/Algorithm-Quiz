const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ");

let count = 0;

for(i = 0; i < input.length; i++){
  if(input[i] !== ''){
    count++;
  }
}
console.log(count);