var http = require('http');

http.createServer(function (request, res) {
    res.end('Hello World!');
    handleRequest(request.method, res);
}).listen(8080);

function handleRequest(method, res) {
    switch (method) {
        case "GET":
            console.log('GET Request');
            break;
        case "POST":
            console.log('POST Request');
            break;
        case "PUT":
            console.log('PUT Request');
            break;
        case "DELETE":
            console.log('DELETE Request');
            break
        default:
            res.writeHead(400);
            return;
            break;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
}