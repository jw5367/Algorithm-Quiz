const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n")

let arrayOne = input[0].split(' ').map( x => Number(x)); 
let arrayTwo = input[1].split(' ').map( x => Number(x)); 
const array= [];

for(i = 0; i <= arrayOne[0]; i++){
  if(arrayOne[1] > arrayTwo[i]){
    array.push(arrayTwo[i]);
  }
}
console.log(array.join(' '));