const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let ball = 1;

for(i = 1; i <= Number(input[0]); i++){
  let num = input[i].split(' ').map(Number).sort((a,b) => a - b);
  if(num[0] === ball){
   ball = num[1];
  }else if(num[1] === ball){
   ball = num[0];
  }
}
console.log(ball);