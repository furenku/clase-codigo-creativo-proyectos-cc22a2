const dibujosGenerativos = {
    montannas: function( dibujo ) {

        const {x,y,ancho,alto} = dibujo        

        const xEscalado = x*width
        const yEscalado = x*height
        const anchoEscalado = ancho*150
        const altoEscalado = alto*100

        push()

            translate( xEscalado, yEscalado )
            
                triangle(
                    -anchoEscalado, 0, anchoEscalado, 0, 0, -altoEscalado
                )

        pop()

    },
    
    nubes: function( dibujo ) {

        const {x,y,ancho,alto} = dibujo

        const xEscalado = x*width
        const yEscalado = x*height
        const anchoEscalado = ancho*200
        const altoEscalado = alto*100

        push()

            translate( xEscalado, yEscalado )
            
                ellipse(
                    -anchoEscalado, 0, anchoEscalado, altoEscalado
                )

        pop()

    },

    arboles: function( dibujo ) {

        const {x,y,ancho,alto} = dibujo

        const xEscalado = x*width
        const yEscalado = x*height
        const anchoEscalado = ancho*25
        const altoEscalado = alto*300

        push()

            translate( xEscalado, yEscalado )
            
                rect(
                    -anchoEscalado, 0, anchoEscalado, -altoEscalado
                )

        pop()

    },

}



