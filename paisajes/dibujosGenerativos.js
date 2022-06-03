const dibujosGenerativos = {
    montannas: function( dibujo ) {

        const {x,y} = dibujo

        push()

            translate( x*width, y*height )
            
                triangle(
                    0, 0, 100, 100, 50, -200
                )

        pop()

    },
    
    nubes: function( dibujo ) {

        const {x,y} = dibujo

        push()

            translate( x*width, y*height )
            
                ellipse(
                    0, 0, 200, 100
                )

        pop()

    },

    arboles: function( dibujo ) {

        const {x,y} = dibujo

        push()

            translate( x*width, y*height )
            
                rect(
                    0, 0, 50, 300
                )

        pop()

    },

}