const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();


let num = 0;

for(i = 1 ; i <= input ; i++){
  num += i;
}
console.log(num);