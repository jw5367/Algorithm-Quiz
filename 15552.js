const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let num = '';

for(i =1; i <= input[0]; i++){

let number = input[i].split(' ');

num += Number(number[0])+Number(number[1]) + "\n";
}

console.log(num);