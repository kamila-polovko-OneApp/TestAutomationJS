// task 1
const http = require('http');
const os = require('os');
const path = require('path');

http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/html" });

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = os.uptime();
  const directory = os.homedir();
  const filename = path.basename(__filename);

  response.write(`<h1>Server Information</h1>`);
  response.write(`<p>Current User: ${username}</p>`);
  response.write(`<p>Operating System: ${osType}</p>`);
  response.write(`<p>System Uptime: ${(os.uptime())} minutes</p>`);
  response.write(`<p>Current Working Directory: ${directory}</p>`);
  response.write(`<p>Server File Name: ${filename}</p>`);

  response.end();
}).listen(3000);

console.log('The server is listening on the localhost:3000');

// Output: 
// Server Information
// Current User: kpolovk
// Operating System: Darwin
// System Uptime: 1147544 minutes
// Current Working Directory: /Users/kpolovk
// Server File Name: index.js