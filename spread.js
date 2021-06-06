//spread com array

let frutas = ['maça','pera','manga']
let frutas2 = ['banana','ameixa','pessego']

let todasAsFrutas = [...frutas, ...frutas2 ]

console.log(todasAsFrutas)

//spread objeto

let dia = {
    data: diaAtual = new Date()
}

let pessoa = {
    nome: 'gabi',
    idade: 34,
    ...dia
}
console.log(pessoa)

// funciona com funcoes

function letras(...params){
    console.log(params[0])
}

letras("a")//retorna um array
letras("a", "b")//retorna um array