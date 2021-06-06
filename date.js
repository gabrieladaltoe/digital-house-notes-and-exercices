let dataAtual = new Date();

let diaSemana = dataAtual.getDay(); //0 é domingo, 1 segunda, 2 terça, 3 quarta...
let dia = dataAtual.getDate(); //dia do mes
let mes = dataAtual.getMonth() + 1; // 0 jan, 1 fev, 2 mar, 3 abril. SOMANDO + 1, VEM O MES CERTINHO
let ano = dataAtual.getFullYear(); //retorna o ano certinho


console.log(dia);

let aniversario = new Date(1987,04,09)

console.log(aniversario.getMonth())