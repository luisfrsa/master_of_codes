
var WebSocket = require('ws');
var jwt = require('jsonwebtoken')
var token = jwt.sign({ name: 'luis.alves' }, 'secret-key', { expiresIn: 15 * 24 * 60 * 60 * 1000 });

console.log("Iniciando conexão 200 c/ token valido");
var ws = new WebSocket('ws://localhost:3000', { headers: { token: token } });
let count = 0;
let arraySoma = [0];
ws.on('open', function open() {
    console.log('Abrindo conexao c/ o servidor');
    let objString = JSON.stringify({ mensagem: 'Mensagem do cliente solicitando conexao c/ o servidor', operacao: 'mensagem' });

    ws.send(objString);
    sendData();
});

ws.on('message', function incoming(data) {
    console.log('Mensagem recebida do servidor: ' + data);
});

function sendData() {
    const msgServidor = 'Ola servidor';
    console.log('Iniciando loop de envio de mensagens do cliente....');
    let objString = JSON.stringify({ mensagem: msgServidor, operacao: 'mensagem' });
    setTimeout(() => {
        console.log("Enviando mensagem ao servidor: " + msgServidor);
        ws.send(objString);
        requestSum();
    }, 3000);
}
function requestSum() {
    arraySoma.push(++count);
    const msgServidor = 'Requsitando soma servidor';
    console.log('Iniciando loop de envio de soma do cliente....');
    let objString = JSON.stringify({ mensagem: msgServidor, operacao: 'soma', valores: arraySoma });
    setTimeout(() => {
        console.log("Enviando mensagem ao servidor: " + msgServidor);
        ws.send(objString);
        sendData();
    }, 3000);
}

