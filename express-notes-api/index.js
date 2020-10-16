const express = require('express');
const app = express();
const fs = require('fs');
const notesJsonData = require('./data.json');

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res, next) => {
  const notes = Object.values(notesJsonData.notes);
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res, next) => {
  const reqId = parseInt(req.params.id, 10);
  const note = notesJsonData.notes[reqId];
  note
    ? res.status(200).json(note)
    : Number.isInteger(reqId) && reqId > 0
      ? res.status(404).json({ error: 'cannot find note with id ' + reqId })
      : res.status(400).json({ error: 'id must be a positive integer' });
});

app.post('/api/notes', (req, res, next) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (typeof req.body === 'undefined') {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  } else {
    const currentId = notesJsonData.nextId;
    notesJsonData.notes[currentId] = req.body;
    req.body.id = notesJsonData.nextId++;

    const notesUpdate = JSON.stringify(notesJsonData, null, 2);
    fs.writeFile('./data.json', notesUpdate, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res, next) => {
  const reqId = parseInt(req.params.id, 10);
  const note = notesJsonData.notes[reqId];
  if (note) {
    delete notesJsonData.notes[reqId];
    const notesUpdate = JSON.stringify(notesJsonData, null, 2);
    fs.writeFile('./data.json', notesUpdate, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(204).json();
      }
    });
  } else {
    if (!Number.isInteger(reqId) || reqId < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else {
      res.status(404).json({ error: 'cannot find note with id ' + reqId });
    }
  }
});

app.put('/api/notes/:id', (req, res, next) => {
  const reqId = parseInt(req.params.id, 10);
  const note = notesJsonData.notes[reqId];
  if (note && req.body.content) {
    notesJsonData.notes[reqId].content = req.body.content;
    const notesUpdate = JSON.stringify(notesJsonData, null, 2);
    fs.writeFile('./data.json', notesUpdate, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(200).json(notesJsonData.notes[reqId]);
      }
    });
  } else {
    if (!Number.isInteger(reqId) || reqId < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
    } else {
      res.status(404).json({ error: 'cannot find note with id ' + reqId });
    }
  }
});

app.listen(3000, () => {
  console.log('Listen to 3000');
});
