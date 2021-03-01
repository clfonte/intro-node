const http = require('http');

// file system: manipula arquivos via servidor
const fs = require('fs');

const server=http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html'});

    if (req.url==='/') {
        // leitura sincronizada com o arquivo | é carregado na memória para depois ser executado
        res.end(fs.readFileSync('./views/index.html'));
    }
    else if (req.url==='/sobre') {
        res.end(fs.readFileSync('./views/sobre.html'));
    }
    else {
        res.writeHead(400, {'Content-type' : 'text/html'});
        res.end(fs.readFileSync('views/error.html'));
    }
});

server.listen(3000, () =>{
    console.log("Subindo");
})