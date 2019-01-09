/*com Express*/
const express = require('express');
const port = 8081;

const server = express();

server.get('/',(request, response) => {
    response.send('<h1>HOME</h1>')
});


server.get('/fotos', (request, response) =>{
    response.send('<h1>Fotos</h1> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EdqNMmBEAWPqD10vlEwy4zqzgAzyFxECMhOa7YY3Ke5THgkQTQ">')
});

server.get('/contatos', (request, response) =>{
    response.send('<h1>Contatos</h1>')
});


server.listen(port, () =>{
    console.log(`Servidor está de pé em: http:\\localhost:${port}`);
    console.log('Para derrubar o server Ctrl + C')
})