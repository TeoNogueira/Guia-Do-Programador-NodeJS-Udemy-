let http = require("http");


http.createServer(function(requisicao, resposta) {

resposta.end("<h1>Bem vindo ao meu site</h1><h4>guia do programador</h4>"); 


}).listen(3000); // porta 3000 http://localhost:3000   <<link para executar apos o comando node http.js



console.log("meu server rodando")

