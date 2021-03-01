//
const http=require('http');

const server=http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type' : 'text/html;charset=utf-8'});

    // requisição vindo do cliente | visualizar a alteração da url
    if (req.url==='/') {
        res.write('<h2> OLA </h2>');
    } 
    else if (req.url==='/sobre') {
        res.write('<h2> Sobre noz </h2>');
    }
    else {
        res.writeHead(400, {'Content-type' : 'text/html;charset=utf-8'});
        res.write('<h1> Página não encontrada </h1>');
    }
    res.end();
});

server.listen(3000, () =>{
    console.log("Servidor ta on");
});