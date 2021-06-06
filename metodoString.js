//a string é um objeto

let texto = 'oi, eu sou a gaba'

console.log(texto.length)

console.log(texto.indexOf('gaba')) // retorna o indice de onde começa a string

console.log(texto.indexOf('joao')) // retorna -1, pois nao existe essa palavra

let palavra = texto.slice(0,2) //nao altera o texto original
console.log(palavra)

let trim = texto.trim() //tira espaços no começo e no final da string, porem nao tira os espaços do meio, entre as paalavras por exemplo
console.log('trim:' + trim)

let split = texto.split(' ')
console.log(split)

let replace = texto.replace('gaba' , 'gabriela')
console.log(replace)

//  map()
//retorna um array com a mesma quantidade de itens
let numeros = [2,4,6];
let dobroNumeros = numeros.map(function(valor){
    return valor*2
});

console.log(dobroNumeros); // [4,8,12]

//  filter()
//filtra informaçoes. 
//retorna apenas os que atendem o q que foi definido

let idades = [15,39,18,23,10];

let maiores = idades.filter(function(valor){
    return valor >=18
})

console.log(maiores); // [39,18,23]

// reduce()
//pega o array e converte em um unico valor
//recebe 2 parametros, um acumulativo e outro o valor de fato do array

let numeros2 = [5,7,16]

let resultado = numeros2.reduce(function(acumulador, valor){
    return acumulador+ valor;
})

console.log(resultado); //28


// forEach()
//nao retorna nada, só itera sobre o array

let paises = ['argentina', 'brasil', 'colombia']

paises.forEach(function(valor){
    console.log(valor)
})

//argentina
//brasil
//colombia

paises.forEach(function(valor, indice){
    console.log(valor, indice)
})

//argentina 0
//brasil 1
//colombia 2
