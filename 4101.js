const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");


for(i = 0; i <= input.length-2; i++ ){
  let inputNum = input[i].split(' ');
  if(Number(inputNum[0]) > Number(inputNum[1])){
    console.log("Yes");
  }else if(Number(inputNum[0]) <= Number(inputNum[1])){
    console.log("No");
  }
}