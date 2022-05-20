function drawExample1({ x, y, size }) {

    fill( 1/2, 1, 1 )

    circle(
        x, y, size
    )

}



function drawExample2({ x, y, size }) {

    fill( 1/3, 1, 1 )

    square(
        x, y, size
    )

}


function drawExample3({ x, y, size }) {

    fill( 3/4, 1, 1 )

    push()
        translate( x, y )
            rotate( HALF_PI / 2 )
                rect(
                    0, 0, size, size/2
                )
    pop()

}