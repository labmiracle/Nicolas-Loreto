const http = require('http');

let port = process.env.PORT || 3000;
const ip = process.env.IP || 'localhost';

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hi from the server!');
  })
  .listen(port, ip);

console.log('server started on ', port);
