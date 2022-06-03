
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

                dibujoCantidades = dibujosCantidades[ tipo ]

                
                const cantidad = ceil( random( dibujoCantidades.minimo, dibujoCantidades.maximo+1 ) )


                dibujoConfigurar( dibujoSeleccionado, cantidad )
                
                dibujoMostrar( dibujoSeleccionado )

            }

        }
    }

}

