const fs = require('fs');
const path = require('path');
const path_to_file = path.resolve(__dirname, 'text.txt');
const stream = fs.createReadStream(path_to_file);
let result = '';
stream.on('data', bit => result = result + bit);
stream.on('end', () => console.log(result));