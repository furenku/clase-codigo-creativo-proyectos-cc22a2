let lastVolume

function detectAudioEvents() {
    
    let volume = 0

    if (mic) volume = mic.getLevel();

    if( floor(volume*5) != floor(lastVolume*5) ) {
        
        generateEvent( volume )

    }

    lastVolume = volume

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