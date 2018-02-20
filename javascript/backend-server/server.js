var http = require('http');
var login = require('./login');

var json_values = {
    hello: { 'hello': 'world' },
};


console.log(json_values);
console.log(json_values.hello);

http.createServer(function (request, res) {
    handleRequest(request.method, res);
    res.write(JSON.stringify(json_values.hello));    
    res.end();
}).listen(3000);