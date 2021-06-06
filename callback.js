// é uma função que passa como parametro outra função
function VaicomoParametro(){

}

function funcaoPai(a, b, VaicomoParametro){

}

const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)

console.log(calculadora(10, 20, somar))


