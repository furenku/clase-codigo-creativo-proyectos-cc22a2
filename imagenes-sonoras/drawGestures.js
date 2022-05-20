function drawExample1({ x, y, size }) {

    fill( 1/2, 1, 1 )

    let scaledSize = map( size, 0, 1, 50, 150 )

    circle(
        x, y, scaledSize
    )

}



function drawExample2({ x, y, size }) {

    fill( 1/3, 1, 1 )

    let scaledSize = map( size, 0, 1, 50, 150 )

    square(
        x, y, scaledSize
    )

}


function drawExample3({ x, y, size }) {

    fill( 3/4, 1, 1 )

    let scaledSize = map( size, 0, 1, 50, 350 )

    push()
        translate( x, y )
            rotate( HALF_PI / 2 )
                rect(
                    0, 0, scaledSize, scaledSize/2
                )
    pop()

}