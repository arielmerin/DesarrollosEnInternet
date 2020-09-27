
/**
 * Es como un constructor, implicitamente va a regresar this como objeto cuando lo invocamos con new
 */
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}


Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}


Persona.prototype.esAltx = function(){
    return this.altura >= 1.8
}

/**
 * New seguido del prototitpo, permite que se cree un nuevo objeto y a ese objeto se le asigne como prototipo el que se le asigne después
 */
var ariel = new Persona('Ariel', 'Merino', 1.9)
var ruth = new Persona('Ruth', 'Peña', 1.86)
