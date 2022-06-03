const dibujosGenerativos = {
    montannas: function( dibujo ) {

        const {x,y,ancho,alto} = dibujo        

        const xEscalado = x*width
        const yEscalado = y*height
        const anchoEscalado = 100 + ancho*150
        const altoEscalado = 100 + alto*100

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
        const yEscalado = y*height
        const anchoEscalado = 100 + ancho*200
        const altoEscalado = 30 + alto*100

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
        const yEscalado = y*height
        const anchoEscalado = 25 + ancho*25
        const altoEscalado = 100 + alto*300

        push()

            translate( xEscalado, yEscalado )
            
                rect(
                    -anchoEscalado, 0, anchoEscalado, -altoEscalado
                )

        pop()

    },

}



