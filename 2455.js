const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let most = 0;
let array = [];

for(i = 0; i < input.length; i++){
  let people = input[i].split(' ').map(Number);
  most = most - people[0] + people[1];
  array.push(most);
  array.sort((a,b) => a-b);
}
console.log(array[3]);
