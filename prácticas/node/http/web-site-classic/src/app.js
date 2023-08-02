const port = process.env.PORT || 5000;

const ip = process.env.IP || 'localhost';

const url = ip + ':' + port;

const server = ' http://' + ip + ':' + port;

const http = require('http');

http
  .createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, { 'Content-type': 'text/html' });

      let html = `   
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Web site classic</title>
                  </head>
                  <body>
                  <h1>Welcome to the website!</h1>
                  <h2>Available urls:</h2>
                  <ul>
                    <li>
                        <a href='http://${url}/about-us'>
                        ${url}/about-us
                        </a>
                      </li>

                  <li>
                      <a href='http://${url}/where-we-are'>
                        ${url}/where-we-are
                      </a>
                    </li>
                    <li>
                      <a href='http://${url}/what-do-we-do'>
                      ${url}/what-do-we-do
                    </a>
                  </li>
                  <li>
                      <a href='http://${url}/contact'>
                      ${url}/contact
                  </a>
                </li>
                </ul>  
                  </body>
                  </html>`;

      res.end(html);
    } else if (req.url === '/about-us' && req.method === 'GET') {
      res.writeHead(200, { 'Content-type': 'html' });

      let html = `   
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Web site classic</title>
                  </head>
                  <body>
                  <h1>${req.url}</h1>
                  <h2>About us</h2>
                  
                  </body>
                  </html>`;

      res.end(html);
    } else if (req.url === '/where-we-are' && req.method === 'GET') {
      res.writeHead(200, { 'Content-type': 'text/html' });

      let html = `   
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Web site classic</title>
                  </head>
                  <body>
                  <h1>${req.url}</h1>
                  <h2>Where we are</h2>
                  
                  </body>
                  </html>`;

      res.end(html);
    } else if (req.url === '/what-do-we-do' && req.method === 'GET') {
      res.writeHead(200, { 'Content-type': 'text/html' });

      let html = `   
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Web site classic</title>
                  </head>
                  <body>
                  <h1>${req.url}</h1>
                  <h2>What do we do</h2>
                  
                  </body>
                  </html>`;

      res.end(html);
    } else if (req.url === '/contact' && req.method === 'GET') {
      res.writeHead(200, { 'Content-type': 'text/html' });

      let html = `   
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Web site classic</title>
                  </head>
                  <body>
                  <h1>${req.url}</h1>
                  <h2>Contact</h2>
                  
                  </body>
                  </html>`;

      res.end(html);
    } else {
      res.writeHead(404, { 'Content-type': 'text/html' });

      let html = `   
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Web site classic</title>
                  </head>
                  <body>
                  <h1>${req.url}</h1>
                  <h2>Error page</h2>
                  <p>File not found</p>
                  
                  </body>
                  </html>`;

      res.end(html);
    }
  })

  .listen(port, ip);

console.log('server started on', server);
