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
var sum = function (accum, current) {
    return accum + current;
}
wss.on('connection', function connection(ws, req) {
    const retornoServidor = "O servidor recebeu a mensagem: ";
    const conexaoCliente = 'Conexao estabelecida com o cliente';
    console.log("Conectado do IP: " + req.connection.remoteAddress);
    ws.on('message', function incoming(message) {
        let msg = JSON.parse(message);
        console.log('Mensagem recebida do cliente: ' + msg.mensagem);
        ws.send(retornoServidor + msg.mensagem);
        if (msg.operacao == 'soma') {
            console.log('Somando valores ' + JSON.stringify(msg.valores) + ' e retornando: ' + msg.valores.reduce(sum, 0));
            ws.send("Retorno calculado do servidor: " + msg.operacao + "de " + JSON.stringify(msg.valores) + ". Resultado: " + msg.valores.reduce(sum, 0));
        }
    });
    console.log(conexaoCliente);
    ws.send(conexaoCliente);
});
