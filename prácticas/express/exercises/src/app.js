const express = require('express');
const serverConfig = require('../setting');
const app = express();

const port = process.env.PORT | serverConfig.port;

app.use(express.json());

// middleware function

const register = (req, res, next) => {
  console.log(req.url);
  next();
};

app.use(register);

app.use(express.static('src/public'));

app.get('/', (req, res) => {
  res.end('Hi from the server');
});

app.get('/yo', (req, res) => {
  res.end(`Hi`);
});

app.listen(port, () => {
  console.log('server started on port', port);
});
