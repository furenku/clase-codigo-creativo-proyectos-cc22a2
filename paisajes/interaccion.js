
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
                switch( letraMayuscula ) {                
                    case "M":
                        dibujosSeleccionados.montannas.mostrar = ! dibujosSeleccionados.montannas.mostrar
                        dibujosSeleccionados.montannas.cantidad = ceil( random(5) )
                        break
                    case "N":
                        dibujosSeleccionados.nubes.mostrar = ! dibujosSeleccionados.nubes.mostrar
                        dibujosSeleccionados.nubes.cantidad = ceil( random(5) )
                        break
                    case "A":
                        dibujosSeleccionados.arboles.mostrar = ! dibujosSeleccionados.arboles.mostrar
                        dibujosSeleccionados.arboles.cantidad = ceil( random(5) )
                        break
                    case "C":
                        elegirFondo()
                        break
                }
            }

        }
    }

}