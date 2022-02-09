const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ");

let A = input[0].split('');
let B = input[1].split('');
let sangSuA = '';
let sangSuB = '';

for(i = 2; i >= 0; i--){
 sangSuA += A[i];
 sangSuB += B[i];
}

if(Number(sangSuA) >= Number(sangSuB)){
  console.log(sangSuA);
}else{
  console.log(sangSuB);
}