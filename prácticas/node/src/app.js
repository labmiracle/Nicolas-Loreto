const http = require('http');

let port = process.env.PORT || 3000;
const ip = process.env.IP || 'localhost';

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'html' });
    // show complete request
    // console.log(req);

    // show current url

    console.log(req.url);

    let html = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practice Node</title>
    </head>
    <body>
    <h1>${req.url}</h1>       
    </body>
    </html>`;

    res.end(html);
  })
  .listen(port, ip);

console.log('server started on ', port);
