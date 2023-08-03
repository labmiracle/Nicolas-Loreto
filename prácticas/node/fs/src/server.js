const http = require('http');
const fs = require('fs');
const path = require('path');
const serverSetting = require('../setting');

const port = process.env.PORT | serverSetting.port;
const ip = process.env.IP | serverSetting.ip;

http
  .createServer((req, res) => {
    const url = req.url;
    let filePath;

    if (url != '/') {
      filePath = path.join(currentDirectory(), 'vistas/404.html');
      fs.readFile(filePath, (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      });
    } else {
      filePath = path.join(currentDirectory(), 'vistas/about.html');
      fs.readFile(filePath, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(port, ip);

// current directory
const currentDirectory = () => {
  console.log('the current directory is: ', __dirname);
  return __dirname;
};

//file
const file = () => {
  return __filename;
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

currentDirectory();
console.log('server started on port', port);
