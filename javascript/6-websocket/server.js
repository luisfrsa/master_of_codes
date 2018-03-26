const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws,req) {
    console.log("Connected from ip: " +req.connection.remoteAddress);
    ws.on('message', function incoming(message) {
        console.log('.::onMessageServer::.');
        console.log(message);
    });
    console.log('.::sendFromServer::.');
    ws.send('sendFromServer');
});