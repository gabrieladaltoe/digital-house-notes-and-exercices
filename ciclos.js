// for in - usado em objetos


let pessoa = {
    nome: "gabriela",
    idade: 34,
    profissao:"programador"
}

for (let caracteristicas in pessoa){
    console.log(pessoa[caracteristicas])
}

let carro = {
    nome:"fox",
    ano: 2011
}

for(let prop in carro){
    console.log(carro[prop]) //desta forma ele pega o valor de cada propriedade
}

// for of - usado em arrays // ajuda a iterar strings


let series = ["friends", "game of thrones", "breaking bad"]

for ( let serie of series){
    console.log(serie)
}

