var edad = 19

/**
 * Para incrementar un número en js
 */

edad = edad + 1
edad += 1

var peso = 69

peso = peso -1


peso-=2
var aleatoria = peso + edad

/**
 * Problema con js y los decimales, no es tan precisa la menra en que los almacena, porque destina poca memoria en la ram para calcularlos
 */
var vino = 200.3
var totalVino = vino *3

/**
 * Maneras de evitar esto
 */

var totalVinoDecimal = vino *100 / 3

/**
 * O podemos tener
 */
var realTotal = Math.round(vino * 100 * 3) / 100

var totalRecortado = totalVino.toFixed(2)
var parseado = parseFloat(totalRecortado)

var pizza = 12
var persona = 5
var cantidadPorcionesPersona = pizza/5