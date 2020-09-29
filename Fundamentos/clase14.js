

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
// for (let i = 1; i <25; i++) {
//
//     obtenerPersonaje(i)
//         .then(personaje =>{
//         personajes.push(new Personaje(personaje.name, parseInt(personaje.height)))
//     }).catch(function (id){
//         onError(id)
//     })
//
// }
/**
 * Esta es la manera de utilizar async-await para las promesas en JS
 * No todos los navegadores lo soportan un polifield
 * @returns {Promise<void>}
 */
async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch (idError){
        onError(idError)
    }

    // Promise
    //     .all(promesas)
    //     .then(personajes => console.log(personajes))
    //     .catch(onError)
}
obtenerPersonajes()

const esAlto = (personaje) => parseInt(personaje.altura) >= 100

// var personajesAltos = personajes.filter(esAlto)
// console.log(personajesAltos)

//Orden para que nos de como lo fuimos pidiendo al servidor