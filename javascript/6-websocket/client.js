// https://github.com/websockets/wsconst WebSocket = require('ws');

const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000');


function noop() { }

ws.on('open', function open() {
    console.log('.::open::.');
    ws.send('open');
    sendData();
    
});

ws.on('message', function incoming(data) {
    console.log('.::onMessageClient::.');
    console.log(data);
});

function sendData(){
    setInterval(() => {
        console.log('.::sendData::.');
        ws.send('sendData');

        console.log('.::ping::.');        
        ws.ping(noop);
    }, 1000
);
}