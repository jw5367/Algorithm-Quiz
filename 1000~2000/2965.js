const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ");

let num = input.map(Number);
let count = 0;

if(num[1] - num[0] >= num[2] - num[1]){
count = num[1] - num[0] - 1;
}else if(num[1] - num[0] < num[2] - num[1]){
count = num[2] - num[1] - 1;
}else if(num[1] - num[0] === 1 && num[2] - num[1] === 1){
count = 0;
}

console.log(count);