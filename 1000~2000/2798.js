const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let firstInput = input[0].split(' ').map(Number);
let secondInput = input[1].split(' ').map(Number); 
let max = 0;

for(i = 0; i < firstInput[0] - 2; i++){
  for(j = i + 1; j < firstInput[0] - 1; j++){
    for(k = j + 1; k < firstInput[0]; k++){
      let plusNum = secondInput[i] + secondInput[j] + secondInput[k];
      if( plusNum <= firstInput[1] && max < plusNum){
          max = plusNum;
      }
    }
  }
}
console.log(max);