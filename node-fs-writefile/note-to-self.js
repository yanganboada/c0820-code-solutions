const fs = require('fs');
const notes = process.argv[2];

fs.writeFile('note.txt', notes, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
