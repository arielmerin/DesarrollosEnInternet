/**
 *Hay que asignarle un prototipo padre al prototipo hijo,
 * hacemos esto para no pisar el prototipo del objeto padre
 *
 *
 *
 * @param prototipoHijo
 * @param prototipoPadre
 */
// function heredaDe(prototipoHijo, prototipoPadre){
//     var fn = function (){}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
// // Rarísimo tío
//     prototipoHijo.prototype.constructor = prototipoHijo
// }



/**
 * Es como un constructor, implicitamente va a regresar this como objeto cuando lo invocamos con new
 */
class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(funct){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (funct){
            funct(nombre, apellido)
        }else {

        }
    }
    esAltx(){
        return this.altura >= 1.8
    }
}

class Desarrollador extends Persona{
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, soy ${nombre} soy desarrollador`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }


}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día! ${nombre} ${apellido}`)
    if (esDev){
        console.log('Qué chido que eres desarrollador jaajs')
    }
}
/**
 * New seguido del prototitpo, permite que se cree un nuevo objeto y a ese objeto se le asigne como prototipo el que se le asigne después
 */
var ariel = new Desarrollador('Ariel', 'Merino', 1.9)
var ruth = new Persona('Ruth', 'Peña', 1.86)

ariel.saludar(responderSaludo)
ruth.saludar()





