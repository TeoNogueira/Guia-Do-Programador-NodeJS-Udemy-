const http = require('http');


http.createServer((request, answer) => {
let msg = 'Hello User'


    answer.end(`<h1>Bem-vindo ao meu site</h1><br/> ${msg}`)

    
}).listen(8080)

let receberPessoa = require('./module_exports_and_let_require()')
console.log('Server Rodando')

