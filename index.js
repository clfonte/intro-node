// 
const http=require('http');

// cria um servidor dentro de um callback para chamar a page que vai ser mostrada
const server=http.createServer((req,res)=> {

    // 200 - page ativa | 400 - erro de código/não encotrou a page | 500 - não gerou conexão
    // tipo de arquivo/estrutura
    res.writeHead(200,{'Content-type': 'text/html'});
    // conteúdo
    res.write("<h1> Nada </h1>");
    // finaliza 
    res.end();
});

server.listen(5000, ()=>{
    console.log("Servidor online")
});