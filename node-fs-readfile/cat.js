/* eslint-disable no-console */
const fs = require('fs');
const files = process.argv.slice(2);
let counter = files.length;
const result = {};

for (let i = 0; i < files.length; i++) {
  fs.readFile(`./${files[i]}`, 'utf8', (err, data) => {
    if (err) throw err;
    counter--;
    result[counter] = data;
    if (!counter) {
      for (const prop in result) {
        const print = Object.values(result).sort().reverse()[prop];
        console.log(print);
      }
    }
  });
}
