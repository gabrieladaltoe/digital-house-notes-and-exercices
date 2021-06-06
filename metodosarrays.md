* Métodos de arrays*

Arrays são um tipo de matriz
Seu primeiro índice é 0, no javascript


~~~javascript

let seriesFavoritas = [ 'Friends', 'GoT'];

console.log(seriesFavoritas[0]) /*Friends*/

console.log(seriesFavoritas.lenght) /*2*/

~~~

Array pode ser let, const, var.
Pode ter vários tipos de variáveis dentro do array, number, boolean, string, object.


/*.push()*/
Adicionar um ou mais elementos no final do array
Recebe um ou mais elementos como paramentro
Retorna um novo comprimento do array

/*.pop()*/
Não recebe paramtro
Retorna o elemento eliminado (bom usar uma nova variavel para armanezar o elemento eliminado)
    

/*.shift()*/
Elimina o primeiro elemento de um array
Não recebe paramtro
Retorna o elemento eliminado 

/*unshift()*/
Adiciona um ou mais elementos no início de um array
Recebe um ou mais elementos
Retorna o novo comprimento do array

/*.join()*/
Junta os elementos de uma array usando o separador que especificamos. Se nao especificar, ele retorna com vírgulas

Recebe um separador (string)
Retorna uma unica string com os elementos unidos

/*.indexOf()*/
Procura no array o elemento que recebe como parametro
Recebe um elemento como parametro que será buscado no array
Retorna a primeira posição onde encontra o que estava procurando. SE NAO ENCONTRAR, retorna -1

/*.lasIndexOf()*/
Procura no array o elemento que recebe como parametro, começando a busca pelo final do array
Mesmo que encontre elementos repetidos, retorna a primeira posição que encontrar

/*.includes()*/
Similar ao indexOf(), porem retorna um booleano
Rece como parametro o item para pesquisar no array
Retorna verdadeiro se encontrou, ou false se nao encontrou

/*map()*/

