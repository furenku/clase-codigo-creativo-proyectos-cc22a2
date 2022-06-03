let estado = "INICIO"

let teclasValidasDibujo = [ "D", "C", "M", "N", "A" ]
let teclasValidasControl = [ "P", "F" ]


let dibujosConfiguracion = {
    montannas: {
        minimo: 4,
        maximo: 12,
        posicion: {
            y: {
                minimo: 0.3,
                maximo: 0.6,
            }
        },
        elementos: {
            minimo: 3,
            maximo: 7,
        }
    },
    nubes: {
        minimo: 5,
        maximo: 25,
        posicion: {
            y: {
                minimo: 0,
                maximo: 0.3,
            }
        },
        elementos: {
            minimo: 5,
            maximo: 12,
        }
    },
    arboles: {
        minimo: 20,
        maximo: 50,
        posicion: {
            y: {
                minimo: 0.6,
                maximo: 1,
            }
        },
        elementos: {
            minimo: 20,
            maximo: 50,
        }
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

