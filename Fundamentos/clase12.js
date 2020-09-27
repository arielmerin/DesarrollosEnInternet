var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    libros: 10
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 175
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 79
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    libros: 965
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 875
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 54
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

// const pasarACentimetros = (persona) => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }


/**
 * Cuando vamos a regrear un nuevo objeto
 * @param {} persona 
 */
const pasarACentimetros = persona => ({
    ...persona,
    altura: persona.altura *100
})

 var personasEnCM = personitasBBs.map(pasarACentimetros)


 /**
  * Reduce
  * Reducir un array a un valor
  */

const bookReducer = (acum, {libros}) => acum += libros


var totalLibros = personitasBBs.reduce(bookReducer, 0)

var totalLibrosAPata = 0

for( let i = 0; i < personitasBBs.length; i++){
    totalLibrosAPata = totalLibrosAPata + personitasBBs[i].libros
}