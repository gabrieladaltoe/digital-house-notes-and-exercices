//const somar = () => console.log('teste') 
//const somar = numero => console.log('recebi um ' + numero*2);
let somar = (a, b) => a + b;
let dobro = a => a * 2
//quando é uma linha, n precisa de chaves, nem do return

somar(10,2)
somar(8,7)
dobro(5)

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}

horaAtual()