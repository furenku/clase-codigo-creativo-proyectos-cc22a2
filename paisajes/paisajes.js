let estado = "INICIO"

let teclasValidasDibujo = [ "C", "M", "N", "A" ]
let teclasValidasControl = [ "P", "F" ]


let dibujosSeleccionados = [
    {
        tipo: "MONTANNAS",
        cantidad: 3,
    },
    {
        tipo: "NUBES",
        cantidad: 8,
    },
    {
        tipo: "ARBOLES",
        cantidad: 2,
    },
    {
        tipo: "CASAS",
        cantidad: 4,
    },
    {
        tipo: "AUTOS",
        cantidad: 12,
    },
    {
        tipo: "AVES",
        cantidad: 22,
    },
]


let colorFondo


function setup() {
    
    createCanvas( windowWidth, windowHeight )
    
    colorMode( HSB, 1,1,1 )
    
    textAlign(CENTER, CENTER)
    
    colorFondo = color(0,0,1)

}




function draw() {

    background( 0, 0, 1 )

    switch( estado ) {

        case "INICIO":
            textSize( 40 )
            text( instrucciones, width/2, height/2)
            break

        case "DIBUJANDO":
            
            dibujarPaisaje()

            break

        case "GUARDAR":
            textSize( 40 )
            text( "guardando", width/2, height/2)
            break

        case "FINAL":
            textSize( 40 )
            text( "final", width/2, height/2)
            text( "presiona cualquier tecla", width/2, height/2 + 75 )
            break

    }


}


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
            
            estado = "DIBUJANDO"

            switch( letraMayuscula ) {
                case "M":
                    break
                case "C":
                    elegirFondo()
                    break
            }

        }
    }

}