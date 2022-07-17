var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ];
listaNumeros.forEach(function(numero, i) {
    listaNumeros[i]=listaNumeros[i]*2;
    console.log(numero);
})
console.log(listaNumeros);