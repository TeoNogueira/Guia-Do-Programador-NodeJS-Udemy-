// iniciando o express

const express = require("express"); // importando o express

const app = express(); //iniciando o express, e passando essa inicialização para variável app


app.listen(4000, function(erro){

if(erro){

    console.log("ocorreu um erro")

} else{ console.log("servidor iniciado com sucesso")
}

})
//suficiente para executar um servidor EXPRESS







