const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim().split(" ");

let H = Number(input[0]);
let M = Number(input[1]);

if( H > 0 && M < 45 ){
  H = H - 1 ;
  M = 60 - ( 45 - M );
  console.log( H, M );
}else if( H >= 0 && M >= 45 ){
  M = M - 45;
 console.log(H, M);
}else if( H === 0 && M < 45 ) {
  H = 23;
  M = 60 - ( 45 - M );
  console.log(H, M); 
}