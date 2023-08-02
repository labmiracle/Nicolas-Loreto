const http = require('http');
const fs = require('fs');

const port = process.env.PORT | 5000;
const ip = process.env.IP | 'localhost';

http
  .createServer((req, res) => {
    try {
      if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // display the current value of the directory
        res.end(template);
      }
    } catch (error) {
      throw error;
    }
  })
  .listen(port, ip);

// current directory
const currentDirectory = () => {
  console.log('the current directory is: ', __dirname);
  return __dirname;
};

// read file with fs module
fs.readFileSync('text.txt', 'utf-8', (error, data) => {
  if (!error) {
    console.log(data);
    return data;
  } else {
    throw error;
  }
});

// read the html file

const template = fs.readFileSync('vistas/about.html', 'utf-8', (error, data) => {
  if (!error) {
    console.log(data);
    return data;
  } else {
    throw error;
  }
});

currentDirectory();
console.log('server started on', port);
