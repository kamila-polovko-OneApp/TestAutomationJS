// task 2
const http = require('http');
const os = require('os');
const personalmodule = require('./personalmodule');

http.createServer((request, response) => {
    const day = new Date();
    const hours = day.getHours();
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(personalmodule.greeting(os.userInfo().username));
    response.end();
}).listen(8000);

console.log('The server is listening on the localhost 8000');

// Output:
// Date of request: Thu Apr 27 2023 22:41:42 GMT+0300 (Eastern European Summer Time) Good evening, kpolovk