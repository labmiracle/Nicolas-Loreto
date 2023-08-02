const http = require('http');
const fs = require('fs');

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

// read file with fs module
fs.readFile('text.txt', 'utf-8', (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    throw error;
  }
});

currentDirectory();
console.log('server started on', port);
