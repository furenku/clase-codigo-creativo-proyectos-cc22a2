let estado = "INICIO"

let teclasValidasDibujo = [ "W", "Q" ]
let teclasValidasControl = [ "P", "F" ]


let dibujos = [
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
]


function setup() {

    createCanvas( windowWidth, windowHeight )

    colorMode( HSB, 1,1,1 )
    
    textAlign(CENTER, CENTER)
        
}




function draw() {

    background( 0, 0, 1 )

    switch( estado ) {

        case "INICIO":
            textSize( 40 )
            text( instrucciones, width/2, height/2)
            break

        case "DIBUJANDO":
            
            crearDibujos()

            break

        case "GUARDAR":
            textSize( 40 )
            text( "guardando", width/2, height/2)
            break

    }


}


function keyPressed() {

    // revisar si se presionó tecla válida para control
    if( teclasValidasControl.includes(key) ) {
        switch( key ) {
            case "F":
                estado = "INICIO"
                break
            case "P":
                estado = "GUARDAR"
                break
        }        
    }
    
    
    if( teclasValidasDibujo.includes(key) ) {
        
        estado = "DIBUJANDO"

        switch( key ) {
            case "Q":
                break
            case "W":
                break
        }

    }

}