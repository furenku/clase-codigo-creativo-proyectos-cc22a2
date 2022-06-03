function dibujarSubelementos(elementos) {
    // elementos.forEach(function( dibujo ) {
                

    //     const {x,y,ancho,alto} = dibujo        

    //     const xEscalado = x*100
    //     const yEscalado = y*100
    //     const anchoEscalado = 100 + ancho*100
    //     const altoEscalado = 100 + alto*100

    //     push()

    //         translate( xEscalado, yEscalado )
            
    //             ellipse(
    //                 -anchoEscalado, 0, anchoEscalado, -altoEscalado
    //             )

    //     pop()

    
    // })

}
                


const dibujosGenerativos = {
    montannas: function( dibujo ) {

        const {x,y,ancho,alto,posicion,elementos} = dibujo        

        const xEscalado = x*width
        const yEscalado = y*height
        const anchoEscalado = 100 + ancho*150
        const altoEscalado = 100 + alto*100

        push()

            translate( xEscalado, yEscalado )
            
                triangle(
                    -anchoEscalado, 0, anchoEscalado, 0, 0, -altoEscalado
                )

                dibujarSubelementos(elementos)

        pop()

    },
    
    nubes: function( dibujo ) {

        const {x,y,ancho,alto,posicion,elementos} = dibujo

        const xEscalado = x*width
        const yEscalado = y*height
        const anchoEscalado = 100 + ancho*200
        const altoEscalado = 30 + alto*100

        push()

            translate( xEscalado, yEscalado )
            
                ellipse(
                    -anchoEscalado, 0, anchoEscalado, altoEscalado
                )

                dibujarSubelementos(elementos)

        pop()

    },

    arboles: function( dibujo ) {

        const {x,y,ancho,alto,posicion,elementos} = dibujo

        const xEscalado = x*width
        const yEscalado = y*height
        const anchoEscalado = 25 + ancho*25
        const altoEscalado = 100 + alto*300

        push()

            translate( xEscalado, yEscalado )
            
                rect(
                    -anchoEscalado, 0, anchoEscalado, -altoEscalado
                )

                dibujarSubelementos(elementos)


        pop()

    },

}



