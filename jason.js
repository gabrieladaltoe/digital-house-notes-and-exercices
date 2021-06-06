let pessoa = {
    nome : 'gabriela',
    idade: 34,
    altura : 1.65
}

let json = JSON.stringify(pessoa);
console.log(json)

let objetoDeNovo = JSON.parse(json)

console.log(objetoDeNovo)