const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let answer = [];

for(i = 97; i <= 122; i++){
  answer.push(input.indexOf(String.fromCharCode(i))); 
}
console.log(answer.join(' '));