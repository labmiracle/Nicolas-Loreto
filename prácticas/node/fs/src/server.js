const http = require('http');
const { url } = require('url');

const port = process.env.PORT | 5000;
const ip = process.env.IP | 'localhost';

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });

      console.log(__dirname);
    }
  })
  .listen(port, ip);

// current directoy
const currentDirectory = () => {
  console.log('the current directory is: ', __dirname);
};

currentDirectory();
console.log('server started on', port);
