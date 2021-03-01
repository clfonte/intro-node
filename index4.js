const http = require('http');

// file system: manipula arquivos via servidor
const fs = require('fs');

const server=http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html'});

    let url=req.url;

    switch (url) {
        case '/':
            res.end(fs.readFileSync('./views/index.html'));
            break;

        case '/sobre':
            res.end(fs.readFileSync('./views/sobre.html'));
        
        default:
            res.end(fs.readFileSync('views/error.html'));
    }
});

server.listen(3000, () =>{
    console.log("Subindo");
})