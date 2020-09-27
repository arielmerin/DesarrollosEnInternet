var contador = 0

const estaLloviendo = () => Math.random() < 0.3

do{
    contador++

}while(!estaLloviendo())


if(contador === 1){
    console.log(`Se tuvo que consultar una vez y a la primera llovió`)

}else{
    console.log(`Se tuvo que consultar ${contador} veces hasta que llovió`)

}


var numerito = prompt('¿Cuál es tu número favorito?')

var MSJ = 'Te toca en '

switch((Math.abs(numerito) % 12) + 1){
    case 1:
        MSJ += 'enero'
        break
    case 2:
        MSJ += 'febrero'
        break
    case 3:
        MSJ += 'marzo'
        break
    case 4:
        MSJ += 'abril'
        break
    case 5:
        MSJ += 'mayo'
        break
    case 6:
        MSJ += 'junio'
        break
    case 7:
        MSJ += 'julio'
        break
    case 8:
        MSJ += 'agosto'
        break
    case 9:
        MSJ += 'septiembre'
        break
    case 10:
        MSJ += 'octubre'
        break
    case 11:
        MSJ += 'noviembre'
        break
    case 12:
        MSJ += 'diciembre'
        break
}

console.log(MSJ)