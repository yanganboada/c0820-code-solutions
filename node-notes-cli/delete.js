const fs = require('fs');
const deleteIndex = process.argv[3];

const remove = fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  else {
    const parseData = JSON.parse(data);
    const notesList = parseData.notes;
    delete notesList[deleteIndex];
    const formattedNotes = JSON.stringify(parseData, null, 2);

    fs.writeFile('./data.json', formattedNotes, 'utf8', err => {
      if (err) throw err;
      else {
        console.log(`Successfully deleted note at ${deleteIndex}`);
      }
    });
  }
});

exports = remove;
