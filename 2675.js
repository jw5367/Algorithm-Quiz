const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

for(i = 1; i <= Number(input[0]); i++){
  let array = '';
  let rs = input[i].split(' ');
  let s = rs[1].split('');
  for(k = 0; k < s.length; k++){
    for(j = 1; j <= Number(rs[0]); j++){
      array += s[k];
    }
  }
  console.log(array.trim());
}