const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ").map(Number);

const k = input[0];
const n = input[1];
const m = input[2];
const cookiePrice = k * n;
const margin = m - cookiePrice;
let value = 0;

if(margin < 0){
  value = cookiePrice - m;
}
if(margin >= 0){
  value = 0;
}
console.log(value);