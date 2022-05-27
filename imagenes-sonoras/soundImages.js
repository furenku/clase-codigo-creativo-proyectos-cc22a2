let demo = true
let drawVolume = true

let threshold = 0.025


let mic;

let gestureTypes = [
  "EXAMPLE_1",
  "EXAMPLE_2",
  "EXAMPLE_3",
]

let exampleImage = [
  
  {
    type: "EXAMPLE_1",
    position: {
      x: 0.3,
      y: 0.3,
    },
    value: 0.3
  },

  {
    type: "EXAMPLE_2",
    position: {
      x: 0.6,
      y: 0.6,
    },
    value: 0.6
  },

  {
    type: "EXAMPLE_3",
    position: {
      x: 0.5,
      y: 0.5,
    },
    value: 1
  },

]


let currentImage


function setup() {

  createCanvas(windowWidth, windowHeight)

  colorMode(HSB, 1, 1, 1, 1)


  textAlign(CENTER, CENTER)
  rectMode( CENTER, CENTER )


  mic = new p5.AudioIn();

  mic.start();

  if( demo ) {

    // TODO: remove following example assignation:
    currentImage = exampleImage
    
  }

}


function draw() {

  background(0, 0, 0.5)

  // Get the overall volume (between 0 and 1.0)
  let vol = 0

  if (mic) vol = mic.getLevel();

  if( drawVolume ) {
    
    rectMode( CORNER, CORNER )

    textSize( 50 )
    fill( 0 )
    
    rect( 0, height-vol*height, 100, vol*height )
    
    fill( 0,0.5,0.5 )
    rect( 100, height-threshold*height, 100, threshold*height )
    
    fill( 0,0,1 )
    text(floor(vol * 100), 50, 50 )

    rectMode( CENTER )
  }

  // background(0, 0, 0.5+vol, 1)

  
  

  noStroke()

  detectAudioEvents()

  drawImage()


}



