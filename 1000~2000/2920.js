const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

let count = 0;

for(i = 0; i < 8; i++){
  if(input[i] - input[i+1] === 1){
    count++;
  }
}

const result = {
  7 : "descending",
  0 : "ascending",
}[count];

console.log(result || "mixed");
