const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let start = input[0].split(' ').map(x => Number(x));
let inputNum = Number(input[1]);
let plus = start[0] * 60 + start[1] + inputNum;
let hour;
let minute;

if(plus <= 23){
  hour = Math.floor(plus/ 60) ;
  minute = plus % 60;
}else if(plus > 23){
  hour = Math.floor(plus/ 60) % 24;
  minute = plus % 60;
}
console.log(hour, minute);