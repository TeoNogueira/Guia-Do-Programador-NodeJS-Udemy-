// iniciando o express
//TRABALHANDO COM ROTAS 

const express = require("express"); // importando o express

const app = express(); //iniciando o express, e passando essa inicialização para variável app

// criando uma rota


app.get("/", function(req, res){

// resposta para o servidor
res.send("Bem-vindo ao guia do programador")
//res.send("bem-vindo ao sdasdadsa do programador") dica: não enviar mais de uma resposta para o client
// lembrar sempre de enviar uma resposta apenas.1

})
// PARAMETROS NAO-OBRIGATORIOS
app.get("/blog/:artigo?", function(req, res){
let artigo = req.params.artigo
if(artigo){

res.send(`${artigo} ARTIGO EXISTENTE`)

}
else{res.send("<h4>Bem-vindo ao meu blog</h4> : guiadoprogramador")}


})

//parametros obrigatorios
app.get("/vem/:nome/:empresa", function(req, res){
  //REQUISIÇAO SÃO OS DADOS ENVIADOS PELO USUÁRIO
  // resposta são as respostas enviadas para o usuário
let nome = req.params.nome
let empresa = req.params.empresa
    res.send(`<h1>Oi: ${nome}, Bem-vindo ao nosso Blog! </h1><br><br>Empresa: ${empresa}`)



})
//QUERY PARAM
app.get("/canal/youtube", function(req, res){
let canal = req.query["canal"]

if(canal) {


    res.send(canal);
}else{ res.send("Nenhum canal fornecido")}
})


//iniciando servidor

app.listen(4000, function(erro){

if(erro){

    console.log("ocorreu um erro")

} else{ console.log("servidor iniciado com sucesso")
}

})



//suficiente para executar um servidor EXPRESS
// para iniciar o servidor digite no terminal: node index.js




//PARA INSTALAR O MONITORAMENTO DO SERVIDOR SEM PRECISAR TA REINICIALIZANDO ELE CONSTANTEMENTE USE: npm install nodemon -g

