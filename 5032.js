const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

let num = input[0] + input[1];
let value = 0;

while(true){
  let sum = num % input[2];
  num = Math.floor(num / input[2]);
  value += num;

  if(sum != 0){
    num += sum;
  }

  if(num < input[2]){
      break;
    }
}
console.log(value);