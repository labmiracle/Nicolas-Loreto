const express = require('express');
const serverConfig = require('../setting');
const app = express();

const port = process.env.PORT | serverConfig.port;
const ip = process.env.IP | serverConfig.ip;

app.get('/', (req, res) => {
  res.send('hi from the server');
});

app.listen(port, ip);

console.log('server started on ', port);
