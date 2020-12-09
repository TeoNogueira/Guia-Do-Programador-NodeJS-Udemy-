let chegada = require("./https") //puxando o module exports do arquivo https.js

function ligadona() {

chegada = true;

let premio = 'Parabéns você foi premiado'
let m  = 50 * 120
if(chegada) {
let callCalc = `Receba seu premio no valor de: ${m}`
console.log(premio)
console.log(callCalc)

 
} else { console.log('Voce nao recebeu o premio')}
}

ligadona()



module.exports = ligadona;