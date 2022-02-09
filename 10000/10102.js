const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let aScore = 0;
let bScore = 0;

for(i = 0; i < Number(input[0]); i++){
  const score = input[1].split('');
  if(score[i] === 'A'){
    aScore += 1;
  }else{
    bScore += 1;
  }
}
if(aScore < bScore){
  console.log('B');
}else if(aScore > bScore){
  console.log('A');
}else if(aScore = bScore){
  console.log('Tie');
}