
const btnEmpezar = document.getElementById('btnEmpezar')
const azul = document.getElementById('celeste')
const magenta = document.getElementById('violeta')
const verde = document.getElementById('verde')
const naranja = document.getElementById('naranja')
class Juego{
    constructor() {
        this.inicializar()
    }
    inicializar(){
        btnEmpezar.classList.add('hide')
    }
}
function empezarJuego(){
    var juego = new Juego()
}
