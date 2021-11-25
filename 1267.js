const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let clock = input[1].split(' ').map(Number);
let youngS = 0;
let minS = 0;

for(i = 0; i < Number(input[0]); i++){
  let priceY = 0;
  if(clock[i] % 30 !== 0){
   priceY = Math.ceil(clock[i] / 30) * 10 ;
  }else if(clock[i] % 30 === 0){
    priceY = clock[i] / 30 * 10 + 10;
  }
  youngS += priceY;
}

for(i = 0; i < Number(input[0]); i++){
  let priceM = 0;
  if(clock[i] % 60 !== 0){
    priceM = Math.ceil(clock[i] / 60) * 15 ;
  }else if(clock[i] % 60 === 0){
    priceM = clock[i] / 60 * 15 + 15;
  }
  minS += priceM;
}

if(youngS < minS){
 console.log('Y ' + youngS);
}else if(youngS > minS){
  console.log('M ' + minS);
}else if(youngS === minS){
  console.log('Y M ' + minS);
}