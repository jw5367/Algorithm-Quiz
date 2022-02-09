const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let count = 0;

for(i=0; i<8; i+=2){
  let splitInput1 = input[i].split('');
  let splitInput2 = input[i+1].split('');
  for(j=0; j<8; j+=2){
    if(splitInput1[j] === 'F'){
      count++;
    }
  }
    for(j=1; j<9; j+=2){
      if(splitInput2[j] === 'F'){
        count++;
      }
    }
  }
  console.log(count);