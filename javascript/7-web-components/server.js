var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3000, function () {
    console.log('Abra o navegador em http://localhost:3000...');
});