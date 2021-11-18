const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(BigInt);

let minus = input[0] - input[1];

if(minus < 0 ){
  minus = -minus;
}
console.log(String(minus));