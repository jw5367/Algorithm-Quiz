const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

if( input % 4 === 0 && input % 100 !== 0 ){
   console.log(1);
}else if(input % 4 === 0 && input % 400 === 0){
   console.log(1);
}else{
  console.log(0);
}