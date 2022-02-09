const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

for(i = 1; i <= Number(input[0]); i++){
  let score = input[i].split(' ').map(Number);
  let allScorePlus = 0;
  let average = 0;
  let moreThanAverage = 0;
  for(j = 1; j <= score[0]; j++){
    allScorePlus += score[j];
  }
  average = allScorePlus / score[0];
  for(j = 1; j <= score[0]; j++){
  if(score[j] > average){
    moreThanAverage++;
  }
  }
  let value = (moreThanAverage / score[0]) * 100; 
  console.log(value.toFixed(3) + '%');
}
