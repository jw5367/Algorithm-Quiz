const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = Number(input);
let i = 2;
let array = [];

while(true){
  if(num % i === 0){
    num = num / i;
    array.push(i);
    i =1;
  }
  i++;

  if(i > num){
    break;
  }
}
console.log(array.join('\n'));