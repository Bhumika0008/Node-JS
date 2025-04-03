const http = require("http");

http.createServer((req,resp) => {
    resp.write("<h1> Hello!! This is the demo server </h1>");
    resp.end();
}).listen(4500);