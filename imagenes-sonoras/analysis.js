let lastVolume

let lastLoudTime = 0
let lastSilentTime = 0

let waitTime = 1
let waitTimeSilence = 0.5

let silence = false


function detectAudioEvents() {
    
    let volume = 0

    if (mic) volume = mic.getLevel();


    // detectar silencio:
    
    
    // si el volumen está encima un umbral
    if( volume > threshold ) {
               
        // y si antes se ha mantenido en silencio por un tiempo delimitado
        if( (millis() - lastLoudTime) > ( waitTime * 1000 ) ) {

            // consideramos un evento
            generateEvent( volume )

        }

        // almacenamos el último momento con sonido
        lastLoudTime = millis()
        lastSilentTime = millis()

        silence = false

    } else {

        if( (millis() - lastSilentTime) > ( waitTimeSilence * 1000 ) ) {

            
            if( ! silence ) {

                console.log("SILENCIO", millis()/1000);

                lastSilentTime = millis()

            }
            
            silence = true


        }
    }

    // if( floor(volume*5) != floor(lastVolume*5) ) {
        
    //     generateEvent( volume )

    // }

    // lastVolume = volume

}


function generateEvent( volume ) {

    currentImage.push({
        
        type: random(gestureTypes),

        position: {
            x: random(),
            y: random(),
        },

        value: volume
        
    })

}