const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let plusPeople = 0;
let array = [];

for(i = 0; i < input.length; i++){
  let people = input[i].split(' ').map(Number);
  plusPeople += people[1];
  plusPeople -= people[0];
  array.push(plusPeople);
  array.sort((a, b) => a - b);
}
console.log(array[9]);