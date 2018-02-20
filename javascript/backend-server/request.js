
function request() {
    var self = this;
    self.get = function () { };
    self.post = function () { };
    self.put = function () { };
    self.delete = function () { };

    self.handleRequest = function(method, res,param) {
        switch (method) {
            case "GET":
                self.get(param);
                console.log('GET Request');
                break;
            case "POST":
                self.post(param);
                console.log('POST Request');
                break;
            case "PUT":
                self.put(param);
                console.log('PUT Request');
                break;
            case "DELETE":
                self.delete(param);
                console.log('DELETE Request');
                break;
            default:
                res.writeHead(400);
                return;
                break;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
    }
}
console.log('hello request');
