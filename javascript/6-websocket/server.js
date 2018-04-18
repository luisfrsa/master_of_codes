const WebSocket = require('ws');
var jwt = require('jsonwebtoken');

const wss = new WebSocket.Server({
    port: 3000,
    verifyClient: function (info, cb) {
        jwt.verify(info.req.headers.token, 'secret-key', function (err, decoded) {
            if (err) {
                console.log("Conexao nao autorizada");
                cb(false, 401, 'Unauthorized')
            } else {
                console.log("Conexao autorizada");
                info.req.user = decoded
                cb(true)
            }
        });
    }
});

wss.on('connection', function connection(ws, req) {
    const retornoServidor = "O servidor recebeu a mensagem: ";
    const conexaoCliente = 'Conexao estabelecida com o cliente';
    console.log("Conectado do IP: " + req.connection.remoteAddress);
    ws.on('message', function incoming(message) {
        console.log('Mensagem recebida do cliente: ' + message);
        ws.send(retornoServidor + message);
    });
    console.log(conexaoCliente);
    ws.send(conexaoCliente);
});
