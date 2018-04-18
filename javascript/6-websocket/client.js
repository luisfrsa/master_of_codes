
var WebSocket = require('ws');
var jwt = require('jsonwebtoken')
var token = jwt.sign({ name: 'luis.alves' }, 'secret-key', { expiresIn: 15 * 24 * 60 * 60 * 1000 });

console.log("Iniciando conexão 200 c/ token valido");
var ws = new WebSocket('ws://localhost:3000', { headers: { token: token } });

ws.on('open', function open() {
    console.log('Abrindo conexao c/ o servidor');
    ws.send('Mensagem do cliente solicitando conexao c/ o servidor');
    sendData();

});

ws.on('message', function incoming(data) {
    console.log('Mensagem recebida do servidor: ' + data);
});

function sendData() {
    const msgServidor = 'Ola servidor';
    console.log('Iniciando loop de envio de mensagens do cliente....');
    setInterval(() => {
        console.log("Enviando mensagem ao servidor: " + msgServidor);
        ws.send(msgServidor);

    }, 1000);
}
