const http = require('http');
const fs = require('fs');
const path = require('path');
const { findPackageJSON } = require('module');
const { isCryptoKey } = require('util/types');
const { fileURLToPathBuffer } = require('url');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //  BLOCK favicon completely
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }

  //  HANDLE FORM SUBMIT ONLY
  if (req.url === '/submit-details' && req.method === 'POST') {
    const body = [];

    req.on('data', chunk => body.push(chunk));

    req.on('end', () => {

      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);

      const data = {};
      for (const [key, value] of params.entries()) {
        data[key] = value;
      }

      console.log('WRITING FILE:', data);

      const filePath = path.join(__dirname, 'example.txt');

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Saved</h1>');
    });

    return; // ABSOLUTELY REQUIRED
  }

  //  HOME PAGE ONLY
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <form action="/submit-details" method="POST">
      <input name="username" />
      <input name="gender" />
      <button>Submit</button>
    </form>
  `);
});

server.listen(3010, () => {
  console.log('Server running on 3010');
});
