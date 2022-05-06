function crearDibujos() {

    let posPrueba = 0

    for( let dibujo of dibujos ) {
        
        text(
            dibujo.tipo, width/2, height/2 + posPrueba
        )
        
        posPrueba+=100

    }


}