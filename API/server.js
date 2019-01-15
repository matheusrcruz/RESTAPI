/*com Express*/
const express = require('express');
const bodyParser = require('body-parser');
const port = 8081;
const logado = true;
const server = express();
const USERS = [
{
    id: 1,
    name: 'Matheus',
    age: 20,
    data: 1998
},
{
    id: 2,    
    name: 'Francisco',
    age: 17,
    data: 2001
},
{
    id: 3,
    name: 'Savio',
    age: 22,
    data: 1996
},
{
    id: 4,
    name: 'Adalberto',
    age: 24,
    data: 1995
}
];

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use((req, res, next) => {
    if(logado){
        next();
    } else{
        res.send('<h1>Voce não está logado;</h1>');
    }
});

server.post('/id', (req, res) => {
    const requisicao = req.body;
    USERS.push( {id: USERS.length + 1, ...requisicao});
    
    res.send(USERS);
});

server.get('/usuario', (req, res) => {
    res.send('<h1>Hello</h1>');
});

/*
por causa do metodo de leitura
server.use((req, res, next) => {
    res.send({msg: 'Essa Rota não tem funcionalidade'});
})
*/
server.listen(port, () =>{
    console.log(`Servidor está de pé em: http:\\localhost:${port}`);
    console.log('Para derrubar o server Ctrl + C')
});