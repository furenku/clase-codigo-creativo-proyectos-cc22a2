let mic;


let exampleImage = [
  
  {
    type: "EJEMPLO_1",
    position: {
      x: 0.3,
      y: 0.3,
    },
    value: 0.3
  },

  {
    type: "EJEMPLO_2",
    position: {
      x: 0.6,
      y: 0.6,
    },
    value: 0.6
  },

  {
    type: "EJEMPLO_3",
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

  
  drawImage()


}
