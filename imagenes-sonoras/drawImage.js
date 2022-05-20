function drawImage() {

    currentImage.forEach( drawGesture )

}



function drawGesture( gesture ) {


    let x = gesture.position.x * width
    let y = gesture.position.y * height
    let size = gesture.value

    switch( gesture.type ) {

        case "EXAMPLE_1":
            drawExample1({ x, y, size })
            break

        case "EXAMPLE_2":
            drawExample2({ x, y, size })
            break

        case "EXAMPLE_3":
            drawExample3({ x, y, size })
            break

    }

}