let carro = {
    nome:"Fox",
    ano: 2012,
    cor:"azul",
    ligar: function(){
        console.log('O carro ' + this.nome + ' está ligado')
    },
    desligar: function(){
        console.log('O carro ' + this.nome + ' está desligado')
    }

}



console.log(carro.nome + ", e seu ano é " + carro.ano)
carro.ligar()
carro.desligar()

//FUNCOES CONSTRUTORES

function Pessoa(oNome,aIdade){
    this.nome = oNome,
    this.idade = aIdade
}

let Gabriela = new Pessoa('Gabriela', 34)
console.log(Gabriela)

function Carros(nomeCarro, anoCarro, corCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro;
    this.cor = corCarro
}

//INSTANCIANDO OBJETOS

let civic = new Carros('Civic', 2019, 'prata')
let gol = new Carros('Gol', 2017, 'vermelho')
console.log(civic, gol)

let {nome} = carro



function ListaDadosPet(pet){
    let {nome} = pet;
    console.log(nome)  
    return nome
  }
  ListaDadosPet(carro)
