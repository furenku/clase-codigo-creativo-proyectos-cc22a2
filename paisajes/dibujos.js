function reiniciarPaisaje() {

    colorFondo = color(0,0,1)

    Object.values(dibujosSeleccionados).forEach(v=>v.mostrar=false)
    
}


function crearDibujos() {

    let posPrueba = 0

    const dibujos = Object.entries(dibujosSeleccionados).filter( d => d[1].mostrar )

    dibujos.forEach( function(dibujo) {
        
        const [ tipo, configuracion ] = dibujo


        text(
            `${tipo}: ${configuracion.cantidad}` , width/2, height/2 + posPrueba
        )
        
        posPrueba+=100
            

    })


}



function dibujarPaisaje() {

    background( colorFondo )

    crearDibujos()

}