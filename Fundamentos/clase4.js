var nomnre = 'aRiEl', edad = 19


/**
 * Esta función se encarga de recibir un nombre
 */
function imprimirNombre(nombre, edad){
    console.log(`${capitalizeVar(nombre.toLowerCase())} tiene ${edad} años de edad`)
}

function capitalizeVar(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}




imprimirNombre('ruTh', 43)