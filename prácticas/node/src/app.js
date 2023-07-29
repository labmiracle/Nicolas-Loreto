const http = require('http');

const port = 3000;
const ip = 'localhost';

http.createServer((req, res) => {}).listen(port, ip);

console.log('server started on ', port);
