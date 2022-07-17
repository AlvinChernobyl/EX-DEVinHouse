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

function separarCamarote(umaListaDeObjetos) {
    var listaFiltrada = umaListaDeObjetos.filter((objeto) => objeto.setor === "Camarote");
      return listaFiltrada;
  }

function separarArquibancada(umaListaDeObjetos) {
    var listaFiltrada = umaListaDeObjetos.filter((objeto) => objeto.setor === "Arquibancada");
    return listaFiltrada;
}

function separarPista(umaListaDeObjetos) {
    var listaFiltrada = umaListaDeObjetos.filter((objeto) => objeto.setor === "Pista");
    return listaFiltrada;
}

var listaCamarote = separarCamarote(convidadosComBebidasProcessada);
var listaArquibancada = separarArquibancada(convidadosComBebidasProcessada);
var listaPista = separarPista(convidadosComBebidasProcessada);

const camarote = document.getElementById("listaCamarote");
const arquibancada = document.getElementById("listaArquibancada");
const pista = document.getElementById("listaPista");

listaCamarote.forEach(element => {
    camarote.innerHTML += `<li>${element.nome} ${element.sobrenome}</li>`
});

listaArquibancada.forEach(element => {
    arquibancada.innerHTML += `<li>${element.nome} ${element.sobrenome}</li>`
});

listaPista.forEach(element => {
    pista.innerHTML += `<li>${element.nome} ${element.sobrenome}</li>`
});

