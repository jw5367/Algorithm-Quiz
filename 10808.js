const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split('');

let alphabet = [];

for(i=97; i <= 122; i++){
  alphabet.push(String.fromCharCode(i));
}
const arr = new Array(alphabet.length).fill(0);

for(j=0; j<input.length; j++){
  for(i=0; i<26; i++){
    if(alphabet[i] == input[j]){
      arr[i] += 1;
     }
  }
}

console.log(arr.join(' '));