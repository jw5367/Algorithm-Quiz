const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

let plus = 0;

for(i = 0; i < 9; i++){
 plus += input[i];
}
 const minus = plus - 100;

 for(i = 0; i < 9; i++){
   for(j = i + 1; j < 9; j++){
    if(input[i] + input[j] == minus){
      input.splice(i,1);
      input.splice(j-1,1);
    }
   }
 }
 console.log(input.sort((a,b) => a - b).join('\n'));