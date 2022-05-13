function crearDibujos() {

    let posPrueba = 0

    for( let dibujo of dibujosSeleccionados ) {
        
        text(
            `${dibujo.tipo}: ${dibujo.cantidad}` , width/2, height/2 + posPrueba
        )
        
        posPrueba+=100

    }


}



function dibujarPaisaje() {

    background( colorFondo )

    crearDibujos()

}