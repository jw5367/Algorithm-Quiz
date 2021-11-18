const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

let korean = Math.floor(input[1] / input[3]);
let math = Math.floor(input[2] / input[4]);
let value = 0;

if(input[1] % input[3] !== 0){
  korean += 1;
}
if(input[2] % input[4] !== 0){
  math += 1;
}

if(korean > math){
 value = input[0] - korean;
}else {
 value = input[0] - math;
}

console.log(value);