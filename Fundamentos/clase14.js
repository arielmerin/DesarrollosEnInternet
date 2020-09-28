

const API_URL =' https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 3)}`
const OPT = {crossDomain:true}

/**
 * Esto sólo va a ocurrir si el request fue exitoso y además se va a encargar de ejecutarlo
 * el $.get
 *
 * QUÉ RARO PERO RECUERDA QUE CUANDO UNA FUNCIÓN SE ENVÍA COMO PARÁMETRO NO DEBE LLEVER NI SIQUIERA LAS
 * LOS PARÉNTESIS PARA EL ARGUMENTO
 */
// $.get(LUKE_URL, OPT, onSuccesResponse)

var personajes = []


function obtenerPersonaje(id){
    return new Promise( (resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL}`.replace(':id',id)
        $.get(url, OPT, function (data){
            resolve(data)
        })
            .fail(() => reject(id))
    })

}

class Personaje{
    constructor(nombre, altura) {
        this.nombre = nombre
        this.altura = altura
    }
}


function onError(id){
    console.log(`Ocurrió un error al consultar el personaje ${id}`)
}

/**
 * No vamos a saber en qué orden nos van a llegar los request, pues depende del servidor y tal
 * lo único que sabemos es como lo enviamos
 *
 * Esta estructura es CALLBACK HELL
 */
for (let i = 1; i <25; i++) {

    obtenerPersonaje(i).then(function (personaje){
        personajes.push(new Personaje(personaje.name, parseInt(personaje.height)))
    }).catch(function (id){
        onError(id)
    })

}

const esAlto = (personaje) => parseInt(personaje.altura) >= 100

var personajesAltos = personajes.filter(esAlto)
console.log(personajesAltos)

//Orden para que nos de como lo fuimos pidiendo al servidor