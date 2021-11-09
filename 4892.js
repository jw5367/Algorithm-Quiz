const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

  for(i = 0; i <= input.length-2;i++ ){
    let nFourNum = Math.round((input[i] - 1)/2);
    if(input[i] % 2 === 0){
       console.log(`${i+1}. even ${nFourNum}`);
    }else if(input[i] % 2 !== 0){
      console.log(`${i+1}. odd ${nFourNum}`);
    }
}