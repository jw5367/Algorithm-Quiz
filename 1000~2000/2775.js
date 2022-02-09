const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n").map(Number);

const T = input.shift();

for(i = 0; i < T; i++){
  let k = input.shift();
  let n = input.shift();

  let house = Array.from(Array(k+1), () => Array(n+1).fill(0));

  for(j = 1; j <= n; j++){
    house[0][j] = j;
  }

  for(j = 1; j <= k; j++){
    for(l = 1; l <= n; l++){
      house[j][l] = house[j-1][l] + house[j][l-1];
    }
  }
  console.log(house[k][n]);
}