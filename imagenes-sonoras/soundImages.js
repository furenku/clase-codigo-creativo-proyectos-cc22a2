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

  {
    type: "EXAMPLE_3",
    position: {
      x: 0.25,
      y: 0.25,
    },
    value: 1/2
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

  // TODO: remove following example assignation:
  currentImage = exampleImage

}


function draw() {

  background(0, 0, 0.5)

  // Get the overall volume (between 0 and 1.0)
  let vol = 0

  if (mic) vol = mic.getLevel();

  // background(0, 0, 0.5+vol, 1)

  textSize( 50 )

  text(floor(vol * 100), 50, 50 )

  noStroke()

  detectAudioEvents()

  drawImage()


}



