const express = require('express');
const app = express();

app.use((req, res, next) => {
  req.originalUrl === '/index.html' ||
  req.originalUrl === '/style.css' ||
  req.originalUrl === '/main.js'
    ? res.sendFile(req.originalUrl, { root: __dirname }) : next();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express port 3000 is listening');
});
