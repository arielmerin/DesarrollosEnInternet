var ariel = {

    nombre: 'Ariel',
    apellido: 'Merino',
    edad: 19,
    peso: 59
}

console.log(`Al principio del año ${ariel.nombre} pesaba: ${ariel.peso}`)

const aumentarPeso = (persona, incremento) => persona.peso += incremento
const bajarPeso = (persona, decremento) => persona.peso -= decremento

const DIAS_DEL_ANO = 365
const META = ariel.peso -5
const CAMBIO_DE_PESO = 0.3
/**
 * Cada que usemos la función random, hay que tener en cuenta que
 * va a devolver ujn número aleatorio
 */
// for(let i = 0; i < DIAS_DEL_ANO; i++){
//     var rand = Math.random()
//     if(rand < 0.25){
//         /**
//          * Incremento de peso
//          */
//         aumentarPeso(ariel, 0.1)
//     }else if(rand <0.5){
//         // aumenta mucho de peso
//         aumentarPeso(ariel, 0.2)
//     } else{
//         /**
//          * Baja de peso
//          */
//         bajarPeso(ariel, 0.15)

//     }
// }
const comeMucho = () => Math.random() < 0.3
const comeBien = () => Math.random() < 0.4  

var dias = 0

while(ariel.peso > META){
    
    if(comeMucho()){
        aumentarPeso(ariel, 0.3)
    }

    if(comeBien()){
        bajarPeso(ariel, 0.3)
    }
    dias++
}


console.log(`Después de ${dias}, ${ariel.nombre} pesa: ${ariel.peso.toFixed(2)}`)