const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");


for(i = 0; i < input.length - 1; i++){
let num = input[i].split(' ').map(Number);
let array = [];
for(j = 0; j < input.length - 1; j++){
array.push(Math.pow(num[j], 2));
array.sort((a, b) => a - b);
}

if(array[0] + array[1] === array[2]){
  console.log('right');
}else{
  console.log('wrong');
}
}