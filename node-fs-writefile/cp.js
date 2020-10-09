const fs = require('fs');
const originalFile = process.argv[2];
const copyFile = process.argv[3];

fs.readFile(originalFile, 'utf-8', (err, text) => {
  if (err) throw err;
  else {
    fs.writeFile(copyFile, text, 'utf-8', err => {
      if (err) throw err;
    });
  }
});
