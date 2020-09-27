var x = 4, y = '4'

var ariel = {
    nombre: 'Arielin',
    apellido: 'Merino Peña',
    edad: 19,
    cientifico: true,
    cocinero: false,
    cantante: false,
    guitarrista: false,
    dron: true
}

var ruth = ariel

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    if(persona.cientifico){
        console.log('Cientifico')
    }

    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.dron){
        console.log('Vuela dron')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
}


imprimirProfesiones(ariel)

const MAYORIA_DE_EDAD = 18

/**
 * Ejemplo de cómo podemos cambiar un nombre, es una 
 * función anónima, no tiene nombre 
 * 
 * Cuando una función sólo recibe un parámetro, entonces 
 * podemos omitir los paréntesis
 * 
 * Cuando una llave sólo regresa algo, podemos omitir
 * la parte del return y las llaves de la función
 * @param {} persona 
 */
const esMayorDeEdad = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
}
/**
 * La misma función que arriba, sólo que ahora está muy decorada
 * tal que cabe en una sola linea
 * @param {} persona 
 */
const esMayorDeEdadOneline = persona => persona.edad >= MAYORIA_DE_EDAD

/**
 * Otra forma de hacer lo mismo pero con la persona desarticulada
 * Des-estructurada
 * @param {*} persona 
 */
const esMayorDeEdadOnelineDesc = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayor(persona){
    // Ariel es mayor de edad
    // Ariel es menor de edad
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayor(ariel)

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso Denegado')
    } else{
        console.log('Adelante, cariño')
    }
}

const esMenorDeEdad = persona => !esMayorDeEdadOneline(persona)

