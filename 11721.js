const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let eachAlphabet = input.split('');
let num = Math.ceil(eachAlphabet.length/10);

for(i = 0; i < num; i++){
  let value = [];
 for(j = 0; j < 10; j++){
   value.push(eachAlphabet.shift());
 }
 const newValue = 
    value.filter(
        (element, i) => element !== undefined
      );
 console.log(newValue.join(''));
}

