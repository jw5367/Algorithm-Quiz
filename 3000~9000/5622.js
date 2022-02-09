const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let sum = 0;

const dial = {
  ABC : 3,
  DEF : 4,
  GHI : 5,
  JKL : 6,
  NMO : 7,
  PQRS : 8,
  TUV : 9,
  WXYZ : 10,
};

for(i = 0; i < input.length; i++){
  for(key in dial){
    if(key.includes(input[i])){
      sum += dial[key];
    }
  }
}
console.log(sum);