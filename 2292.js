const fs = require('fs');
const input = fs.readFileSync("./text.txt").toString().trim();

let range = 1, block = 1;

while (block < input) {    
	block += 6 * range;

	range++;
}

console.log(range);