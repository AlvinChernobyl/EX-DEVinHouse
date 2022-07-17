var convidado1 = { nome: "José", sobrenome: "Carlos", setor: "Camarote", idade: 18 };
var convidado2 = { nome: "Maria", sobrenome: "Mathues", setor: "Camarote", idade: 20 };
var convidado3 = { nome: "João", sobrenome: "Pereira", setor: "Pista", idade: 14 };
var convidado4 = { nome: "Savio", sobrenome: "Silva", setor: "Pista", idade: 25 };
var convidado5 = { nome: "Paula", sobrenome: "Soares", setor: "Arquibancada", idade: 15 };
var convidado6 = { nome: "Pricila", sobrenome: "Dias", setor: "Arquibancada", idade: 19 };
  
var listadeconvidados=[convidado1,convidado2,convidado3,convidado4,convidado5,convidado6];

function liberarBebidas(convidados) {
    var convidadosOpenBar = [];    
    for (var i = 0; i < convidados.length; i++) {
       
        var convidado = convidados[i];
        
        if(convidado.idade>17){
            convidado.openBar = true;
        }else{
            convidado.openBar = false;
        }
        
        convidadosOpenBar.push(convidado);
        
    }
    return convidadosOpenBar; 
}

var convidadosComBebidasProcessada = liberarBebidas(listadeconvidados);
console.log(convidadosComBebidasProcessada);