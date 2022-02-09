const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();


for(i = 0; i < Number(input); i++){

let array = [];

for(j = Number(input); j > i; j--){
  array.push('*');
}

console.log(array.join(''));
}