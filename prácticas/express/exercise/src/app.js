const express = require('express');
const serverConfig = require('../setting');
const app = express();

const port = process.env.PORT | serverConfig.port;
const ip = process.env.IP | serverConfig.ip;

app.get('/', (req, res) => {
  console.log(res.route);
  res.send('hi from the server');
  res.end();
});

app.get('/yo', (req, res) => {
  res.end('Hi!');
});

// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   res.end(userId);
// });

app.listen(port, () => {
  console.log('server started on', port);
});
