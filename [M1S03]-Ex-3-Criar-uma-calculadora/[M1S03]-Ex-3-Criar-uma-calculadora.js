var numero1=prompt("Digite um número:");
var sinal=prompt("Digite a operação a ser realizada:(+,-,*,/)");
var numero2=prompt("Digite outro número:");

switch (sinal) {
    case '+':
        console.log(parseInt(numero1)+parseInt(numero2));
        
        break;
    case '-':
        console.log(parseInt(numero1)-parseInt(numero2));
        
        break;
    case '*':
        console.log(parseInt(numero1)*parseInt(numero2));
        
        break;
    case '/':
        console.log(parseInt(numero1)/parseInt(numero2));
        
        break;

    default:
        break;
}
