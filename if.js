let dia = 'sabado'

let resultado = dia == 'domingo' ? 'vou a praia' : 'fico em casa'

//console.log(resultado)

switch (dia) {
    case 'segunda':
        console.log('fico em casa')
    break

    case 'terça':
        console.log('vou no cinema')
    break

    case 'quarta':
        console.log('fico em casa')
    break

    case 'quinta':
        console.log('vou estudar')
    break

    case 'domingo':
        console.log('vou ao culto')
    break
    default:
        console.log('descanso')
}

