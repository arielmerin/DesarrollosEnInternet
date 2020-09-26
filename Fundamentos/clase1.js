var nombre = 'Kevin Ariel';
var apellido = 'Merino Peña';

edad = '19 años'

console.log('Hi ' + nombre + ' ' + apellido)

var peso = 70

var nombreMayus = nombre.toUpperCase()
var cuantasLetras = nombre.length
var apellidoMin = apellido.toLowerCase()
var inicialApellido = apellido.charAt(0)

console.log(nombreMayus)
console.log(cuantasLetras)
console.log(apellidoMin)
console.log(inicialApellido)
 /**
  * Formas de concateenar en JS
  */

var nombreCompleto = nombre + ' ' + apellido

/**
 * interpolación de texto
 */
var completeName = `${nombre} ${apellido.toUpperCase()}`

/**
 * Cómo acceder a un substring
 * 
 */

 var str = nombre.substr(1,3) + 'l'
 console.log( 'La última letra de tu nombre es: ' + nombre.charAt(nombre.length - 1))
