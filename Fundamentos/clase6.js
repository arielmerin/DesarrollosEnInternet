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
    edad: 43
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

function impimirNombreEdad(persona){
    console.log(`¡Hola! mi nombre es ${persona.nombre} y tengo ${persona.edad} años de edad`)
}
impimirNombreEdad(ariel)
impimirNombreEdad(ruth)
/**
 * Hacer que regrese el mismo objeto
 * @param {persona} persona 
 */
function cumpleAnos(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}


