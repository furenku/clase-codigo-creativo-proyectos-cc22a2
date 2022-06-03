
function keyPressed() {

    // mover de aquí:
    playSound()

    if( estado == "FINAL" ) {

        reiniciarPaisaje()
        estado = "INICIO"

    } else {
        
        let letraMayuscula = key.toUpperCase()

        // revisar si se presionó tecla válida para control
        if( teclasValidasControl.includes( letraMayuscula ) ) {
            switch( letraMayuscula ) {
                case "F":
                    reiniciarPaisaje()
                    estado = "FINAL"
                    break
                case "P":
                    estado = "GUARDAR"
                    break
            }        
        }
        
        
        if( teclasValidasDibujo.includes( letraMayuscula ) ) {
            
            if( letraMayuscula == "D" ) {
                estado = "DIBUJANDO"
            }

            if( estado == "DIBUJANDO" ) {

                let dibujoSeleccionado
                
                let tipo

                switch( letraMayuscula ) {                
                    case "M":
                        tipo = 'montannas'                        
                        break
                    case "N":
                        tipo = 'nubes'                        
                        break
                    case "A":
                        tipo = 'arboles'                        
                        break
                    case "C":
                        elegirFondo()
                        break
                }

                dibujoSeleccionado = dibujosSeleccionados[ tipo ]

                const cantidadMaxima = dibujosCantidadesMaximas[ tipo ]

                dibujoConfigurar( dibujoSeleccionado, cantidadMaxima )
                
                dibujoMostrar( dibujoSeleccionado )

            }

        }
    }

}


function dibujoConfigurar( dibujo, cantidadMaxima ) {

    const cantidad = ceil( random( cantidadMaxima ) )

    dibujo.elementosGenerados = []

    for( let i=0; i<cantidad; i++ ) {

        dibujo.elementosGenerados.push({
            x: random(),
            y: random(),
        })

    }

}



function dibujoMostrar( dibujo ) {

    dibujo.mostrar = ! dibujo.mostrar

}


