const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let Num = Number(input);
let value = new Array(Num).fill(" ");

for(i = Num-1; i >= 0; i--){
 value[i] = "*"; 
 console.log(value.join(""));
}