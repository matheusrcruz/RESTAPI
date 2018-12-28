const http = require('http');
const port = 8080;
const ip = "0.0.0.0";


const server = http.createServer((request, response) => {
        const respostas = [];
        respostas['/'] = "<h1>Home</h1>"
        respostas['/fotos'] = "<h1>Fotos</h1>"

       response.end(respostas[response.url]);
    
   // if(request.url =='/'){
   //         response.end('<h1>HOME<h1>' );
   // }else if(request.url ==  '/fotos'){ 
   //     response.end('<h1>Foto</h1>');
   // }else{
   //   response.end(`<meta charset='utf-8'> <h1>Está pagina não existe</h1>`)
   // }
});

server.listen(port, ip, () =>{
    console.log(`O Serve está de pé: http://${ip}:${port}`);
    console.log(`Pra desliga o servido Ctrl + C`)
});