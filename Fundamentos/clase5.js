/**
 * Esta variable es de tipo global, le pertenece al objeto global.
 * Si lo ejecutamos en un servidor, le pertenece a node
 * si lo ejecutamos desde el navegador, le pertenece a la ventana, window
 */
var nombre = 'Ariel'

function imprimirNombreMayus(name){
    name = name.toUpperCase()
    console.log(name)
}

imprimirNombreMayus(nombre)