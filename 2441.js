const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let num = Number(input);
for(i = 0; i < num; i++){
  let value = ' '.repeat(i) + '*'.repeat(num-i);
  console.log(value);
}


/*for(i = 0; i < num; i++){
  let array = new Array(num).fill(' ');
  for(j = num; j > i; j--){
    array[j] = '*';
  }
  console.log(array.join(''));
}*/