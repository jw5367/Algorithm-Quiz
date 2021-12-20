const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

const testCase = Number(input.shift());
let scoreArr = [];

for(i = 0; i < testCase; i++){
 let score = input[i].split(' ').map(Number).sort((a, b) => a - b);

 if(score[0] === score[1] && score[1] === score[2]){
   scoreArr.push(10000 + (score[0] * 1000));
 }else if(score[0] !== score[1] && score[1] !== score[2]){
  scoreArr.push(score[2] * 100);
 }else if(score[0] === score[1]){
  scoreArr.push(1000 + (score[0] * 100));
 }else if(score[1] === score[2]){
  scoreArr.push(1000 + (score[1] * 100));
 }
}

let value = scoreArr.sort((a, b) => a - b);
console.log(value[value.length-1]);