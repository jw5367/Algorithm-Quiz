const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let array = [];
let array2 = [];
let value = 0;
let value2 = 0;

for(i = 0; i < 3; i++){
  let num = input[i].split(' ').map(Number);
    array.push(num[0]);
    array2.push(num[1]);
    array.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
}

if(array[0] === array[1]){
  value = array[2];
}else if(array[0] !== array[1]){
  value = array[0];
}

if(array2[0] === array2[1]){
  value2 = array2[2];
}else if(array2[0] !== array2[1]){
  value2 = array2[0];
}

console.log(value ,value2);