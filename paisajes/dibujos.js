function reiniciarPaisaje() {

    colorFondo = color(0,0,1)

    Object.values(dibujosSeleccionados).forEach(v=>v.mostrar=false)
    
}


function crearDibujos() {

    let posPrueba = 0

    const dibujos = Object.entries(dibujosSeleccionados).filter( d => d[1].mostrar )

    dibujos.forEach( function(dibujo) {
        
        const [ tipo, configuracion ] = dibujo

        const cantidad = configuracion.elementosGenerados.length

        text(
            `${tipo}: ${cantidad}` , width/2, height/2 + posPrueba
        )


        const drawFunction = dibujosGenerativos[ tipo ]
        
        configuracion.elementosGenerados.forEach( function( dibujo ){

            drawFunction( dibujo )

        })


        
        posPrueba+=100
            

    })


}


function mostrarInstruccionesDibujos() {

    textSize(20)
    fill(0,0,0.4)
    text( instruccionesDibujo, width/2, height/2)

}

function dibujarPaisaje() {

    background( colorFondo )

    const dibujoVacio = Object.entries(dibujosSeleccionados).filter( d => d[1].mostrar ).length == 0

    if( dibujoVacio ) {

        mostrarInstruccionesDibujos()

    } else {

        crearDibujos()

    }


}





function dibujoConfigurar( dibujo, configuracion ) {

    const cantidad = ceil( random( configuracion.minimo, configuracion.maximo+1 ) )
    const cantidadElementos = ceil( random( configuracion.elementos.minimo, configuracion.elementos.maximo+1 ) )


    dibujo.elementosGenerados = []

    for( let i=0; i<cantidad; i++ ) {
        
        const elementos = []
        
        for( let j=0; j<cantidadElementos; j++ ) {
            
            elementos.push({
                x: random(),
                y: random(),
                ancho: random(),
                alto: random(),
            })
            
        }
        
        dibujo.elementosGenerados.push({
            x: random(),
            y: map(random(),0,1,configuracion.posicion.y.minimo,configuracion.posicion.y.maximo),
            ancho: random(),
            alto: random(),
            elementos
        })
    }

}



function dibujoMostrar( dibujo ) {

    dibujo.mostrar = ! dibujo.mostrar

}

