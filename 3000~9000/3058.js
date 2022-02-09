const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

for(i = 1; i <= Number(input[0]); i++){
 let inputNum = input[i].split(' ').map(Number);
 let plusNum = 0;
 let array = [];
 for(j = 0; j < inputNum.length; j++){
   if(inputNum[j] % 2 === 0){
     array.push(inputNum[j]);
     array.sort((a,b) => a - b);
     plusNum += inputNum[j];
   }
 }
 console.log(plusNum, array[0]);
}