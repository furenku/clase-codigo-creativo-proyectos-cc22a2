
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

                switch( letraMayuscula ) {                
                    case "M":
                        dibujoSeleccionado = dibujosSeleccionados.montannas                        
                        break
                    case "N":
                        dibujoSeleccionado = dibujosSeleccionados.nubes                        
                        break
                    case "A":
                        dibujoSeleccionado = dibujosSeleccionados.arboles                        
                        break
                    case "C":
                        elegirFondo()
                        break
                }


                dibujoConfigurar( dibujoSeleccionado )
                
                dibujoMostrar( dibujoSeleccionado )

            }

        }
    }

}


function dibujoConfigurar( dibujo ) {

    const cantidad = ceil( random(5) )

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


