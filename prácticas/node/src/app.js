const http = require('http');

let port = process.env.PORT || 3000;
const ip = process.env.IP || 'localhost';

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'html' });
    // show complete request
    // console.log(req);

    // show current url
    // console.log(req.url);

    // html with req.url

    if (req.url === '/miracle') {
      let html = `
    
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Miracle</title>
      </head>
      <body>
      <span>The current url is: ${req.url}<span>  
      <h1>Welcome to Miracle!</h1>
      <h3>This is a web site of Miracle</h3>     
      </body>
      </html>`;

      res.end(html);
    } else if (req.url === '/about') {
      let html = `
    
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Miracle</title>
      </head>
      <body>
      <span>The current url is: ${req.url}<span>  
      <h2>About us</h2>
      <p>With over 10 years of experience working in industries as diverse as Insurance, Retail, Oil & Gas and Aerospace, we have become subject matter experts in our domains, achieving a high degree of expertise that shows in the quality of the solutions we deliver for our clients.<p>     
      </body>
      </html>`;

      res.end(html);
    } else if (req.url === '/') {
      let html = `
    
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Miracle</title>
      </head>
      <body>
      <span>The current url is empty<span>  
      <h2>Available urls:</h2>
      <ul>
        <li>
            <a href='http://localhost:3000/miracle'>
              http://localhost:3000/miracle
            </a>
          </li>
  
      <li>
          <a href='http://localhost:3000/about'>
            http://localhost:3000/about
          </a>
        </li>
    </ul>  
      </body>
      </html>`;

      res.end(html);
    } else {
      let html = `
    
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Miracle</title>
      </head>
      <body>
      <span>The current url is: ${req.url}<span>  
      <h2>Error page</h2>
      <h3>404</h3>
      </body>
      </html>`;

      res.end(html);
    }
  })

  .listen(port, ip);

console.log('server started on ', port);
