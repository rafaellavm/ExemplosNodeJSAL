//importanto a biblioteca http
var http = require('http');

//criando o servidor
//o servidor é capaz de atender uma requisição e devolver uma resposta pra ele
var server = http.createServer(function(request, resposta){
    if (request.url == '/produtos'){
        resposta.end('<html><body><h1>Listando os produtos</h1></body></html>');
    }
    else{
        resposta.end('<html><body>Home da casa do código</body></html>')
    }

});

//criando a porta do servidor
server.listen(3000);

console.log('O servidor está rodando...');
