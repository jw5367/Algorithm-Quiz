const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

const eachName = input.split('-');
let value = '';

for(i=0; i<eachName.length; i++){
  let upperEachName = eachName[i].split('');
  if(upperEachName[0] === upperEachName[0].toUpperCase()){
    value += upperEachName[0];
  }
}

console.log(value);