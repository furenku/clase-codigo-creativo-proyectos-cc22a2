let estado = "INICIO"

let teclasValidasDibujo = [ "D", "C", "M", "N", "A" ]
let teclasValidasControl = [ "P", "F" ]


let dibujosCantidades = {
    montannas: {
        minimo: 4,
        maximo: 12,
    },
    nubes: {
        minimo: 5,
        maximo: 25,
    },
    arboles: {
        minimo: 20,
        maximo: 50,
    },
}

let dibujosSeleccionados = {

    montannas: {
        mostrar: false,
        cantidad: 0
    },

    nubes: {
        mostrar: false,
        cantidad: 0
    },

    arboles: {
        mostrar: false,
        cantidad: 0
    },

}


let colorFondo

let synth;


function setup() {
    
    createCanvas( windowWidth, windowHeight )
    
    colorMode( HSB, 1,1,1 )
    
    textAlign(CENTER, CENTER)
    
    colorFondo = color(0,0,1)

    synth = new p5.MonoSynth();

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

