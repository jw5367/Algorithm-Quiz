const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");


for(i = 1; i<= input[0]; i++){
  let num = input[i].split(' ');
  while(true){
    num[0] *= num[0];
    num[1] *= num[1];

    if(num[0] === num[1]){
      break;
    }
  }
}
console.log(num[0]);