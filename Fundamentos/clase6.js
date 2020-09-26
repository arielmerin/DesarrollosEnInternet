/**
 * Clave: valor
 */


var ariel = {
    nombre: 'Ariel',
    apellido: 'Merino Peña',
    edad: 19
}
var ruth = {
    nombre: 'Ruth',
    apellido: 'Peña Hernández',
    edad: 19
}

/**
 * 
 * @param {Nombre} El atributo nombre que da identidad al objeto persona
 */
function imprimirNombreMayus({nombre}){
    var name = nombre.toUpperCase()
    console.log(name)
}


function imprimePalabraMayus(palabra){
    console.log(palabra.toUpperCase())
}

imprimirNombreMayus(ariel)
imprimirNombreMayus({nombre: 'Aaaawow'})
/**
 * Esto se llama des-estructurar objetos
 */
var {apellido} = ruth

imprimePalabraMayus(apellido)