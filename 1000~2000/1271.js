const fs = require('fs'); 
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(BigInt); 
let answer = input[0] / input[1] + '\n'; 
answer += input[0] % input[1] ;
console.log(answer)
