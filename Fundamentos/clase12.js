var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}


var personitasBBs = [sacha, alan, martin, dario, vicky, paula]

// for(let i = 0; i< personitasBBs.length; i++){
//     var nombre = personitasBBs[i]["nombre"]
//     var peso = personitasBBs[i].altura
//     console.log(` ${nombre} mide ${peso}m `)
// }

/**
 * VAMOS A FILTRAR A LAS PERSONAS ALTAS
 */
const esAlta = ({altura}) => altura >= 1.8

/**
 * Suuuper raro, recibe una condición como un filtro y 
 * esta condición va a recibir un tipo de lo que tengamos 
 * listos
 */



// var personasAltas = personitasBBs.filter(esAlta)

/**
 * Otra forma de hacerlo
 */

 var personasAltas = personitasBBs.filter(function (persona){
     return persona.altura > 1.8
 })


 const esBaja = (persona) => !esAlta(persona)
 var personasNoAltas = personitasBBs.filter(esBaja)