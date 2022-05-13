
function keyPressed() {

    if( estado == "FINAL" ) {

        estado = "INICIO"

    } else {
        
        let letraMayuscula = key.toUpperCase()

        // revisar si se presionó tecla válida para control
        if( teclasValidasControl.includes( letraMayuscula ) ) {
            switch( letraMayuscula ) {
                case "F":
                    estado = "FINAL"
                    break
                case "P":
                    estado = "GUARDAR"
                    break
            }        
        }
        
        
        if( teclasValidasDibujo.includes( letraMayuscula ) ) {
            
            
            switch( letraMayuscula ) {
                case "D":
                    estado = "DIBUJANDO"                    
                    break
                case "M":
                    dibujosSeleccionados.montannas.mostrar = ! dibujosSeleccionados.montannas.mostrar
                    break
                case "N":
                    dibujosSeleccionados.nubes.mostrar = ! dibujosSeleccionados.nubes.mostrar
                    break
                case "A":
                    dibujosSeleccionados.arboles.mostrar = ! dibujosSeleccionados.arboles.mostrar
                    break
                case "C":
                    elegirFondo()
                    break
            }

        }
    }

}