const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(BigInt);

let teamOne = input[0] + input[3];
let teamTwo = input[1] + input[2];
let value ;

if(teamOne < teamTwo){
 value = teamTwo - teamOne;
}else {
  value = teamOne - teamTwo;
}

console.log(String(value));