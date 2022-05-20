function drawImage() {

    currentImage.forEach( drawGesture )

}



function drawGesture( gesture ) {


    let x = gesture.position.x * width
    let y = gesture.position.y * height
    let size = map( gesture.value, 0, 1, 50, 150 )

    switch( gesture.type ) {

        case "EJEMPLO_1":
            drawExample1({ x, y, size })
            break

        case "EJEMPLO_2":
            drawExample2({ x, y, size })
            break

        case "EJEMPLO_3":
            drawExample3({ x, y, size })
            break

    }

}