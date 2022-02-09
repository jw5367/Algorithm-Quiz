const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

let aliquotArray = [];
let arrLength = input[1] - 1;

for(i = 1; i <= input[0]; i++){
  if(input[0] % i === 0){
    aliquotArray.push(i);
  }
}

console.log(aliquotArray[arrLength] ?? 0);