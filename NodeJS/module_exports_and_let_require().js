


let pessoa = {// objeto literal

    dono: 'Teófilo Nogueira',
    //classe: 'Human',
   
    }
    
     profissao = () => { // INCLUSAO DE VARIAVEIS PARA UM OBJETO LITERAL ATRAVÉS DE ARROW FUNCTION DENTRO DE A.F
    
        pessoa.prof = 'Programador'
      // pessoa.dono = 'Teófilo'
       
        console.log(pessoa)
    
    let msgnode = 'Iremos Iniciar nossas aulas de Node.JS'
    pessoa.msg = () => { console.log(`<h1>Bem-Vindo ao Site de Teo_Nogueira</h1> <br/> ${msgnode}`) }
    
     console.log(pessoa.prof)
    console.log(pessoa)
    
    }
    
    profissao()
    
    module.exports = pessoa.msg()
    