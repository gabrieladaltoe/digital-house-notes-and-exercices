// alocação nao modifica nem altera os valores de um array

let pessoa ={
    nome: 'gabi',
    altura: 1.65
}

//let nome = pessoa.nome

const {nome, altura} = pessoa //precisa usar os nomes iguazinhos as propriedades do obj

let listaCompras = ['pao', 'leite', 'açucar']

const [item1, item2, item3] = listaCompras; 
//nome exatamente na mesma posicao do array

console.log(item1)