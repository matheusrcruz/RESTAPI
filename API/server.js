/*com Express*/
const express = require('express');
const port = 8081;

const server = express();

const USERS = [
{
    name: 'Matheus',
    age: 20,
    data: 1998
},
{
    name: 'Francisco',
    age: 17,
    data: 2001
},
{
name: 'Savio',
age: 22,
data: 1996
},
{
name: 'Adalberto',
age: 24,
data: 1995
}
]

server.get('/usuario', (req, res) => {
    res.send(USERS);
})

server.use((req, res, next) => {
    res.send({msg: 'Essa Rota não tem funcionalidade'});
})


server.listen(port, () =>{
    console.log(`Servidor está de pé em: http:\\localhost:${port}`);
    console.log('Para derrubar o server Ctrl + C')
});