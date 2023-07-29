const http = require('http');

const port = 3000;
const ip = 'localhost';

http
  .createServer((req, res) => {
    res.end('Hi from the server!');
  })
  .listen(port, ip);

console.log('server started on ', port);
