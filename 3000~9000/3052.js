const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

let divideNumArr = [];

for(i = 0; i < input.length; i++){
  let divideNum = input[i] % 42
  divideNumArr.push(divideNum);
}
let setNumbers = new Set(divideNumArr);

console.log(setNumbers.size);