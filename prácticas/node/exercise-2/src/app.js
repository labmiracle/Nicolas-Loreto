const port = process.env.PORT || 5000;

const ip = process.env.IP || 'localhost';

const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'html' });

    let html = `   
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Earthquakes</title>
    </head>
    <body>
    <h1>Welcome to the website!</h1>
    <h2>Available urls:</h2>
    <ul>
      <li>
          <a href='http://localhost:3000/about-us'>
            http://localhost:3000/about-us
          </a>
        </li>

    <li>
        <a href='http://localhost:3000/where-we-are'>
            http://localhost:3000/where-we-are
        </a>
      </li>
      <li>
      <a href='http://localhost:3000/what-do-we-do'>
          http://localhost:3000/what-do-we-do
      </a>
    </li>
    <li>
    <a href='http://localhost:3000/contact'>
        http://localhost:3000/contact
    </a>
  </li>
  </ul>  
    </body>
    </html>`;

    res.end(html);
  })

  .listen(port, ip);

console.log('listening on port', port);
