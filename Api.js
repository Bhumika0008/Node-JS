const http = require('http');
const data = require('./ApiData');
http.createServer((req,resp) => {
    resp.writeHead(200,{'content-type': 'application \json'});
    resp.write(JSON.stringify (data));
    resp.end();
}) .listen(4000);