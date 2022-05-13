let mic;

function setup() {

  createCanvas(windowWidth, windowHeight)

  colorMode(HSB, 1, 1, 1)


  textAlign(CENTER, CENTER)


  mic = new p5.AudioIn();

  mic.start();

}


function draw() {

  // Get the overall volume (between 0 and 1.0)
  let vol = 0

  if (mic) vol = mic.getLevel();

  background(0, 0, vol)

  text(floor(vol * 100), width / 2, height / 2)

}
