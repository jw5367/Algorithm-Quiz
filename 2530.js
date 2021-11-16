const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let num = input[0].split(' ').map(Number);

let plus = (num[0] * 60) * 60 + (num[1] * 60) + num[2] + Number(input[1]);

let s = plus % 60;
let m = Math.floor(plus / 60);
let h = Math.floor(m / 60);

if(m >= 60){
  m = m % 60;
}
if (h > 23){
  h = h % 24;
}

console.log(h, m, s);