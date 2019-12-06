var positionx = 100
var positiony = 0

var speedx = 5
var speedy = 5

var name = "Tejas"
var moving = true
var xDirection = true
var yDirection = true
var canvasLength = 400
var canvasHeight = 400

var ypaddle = 100
var paddleHeight = 50

function setup() {
  createCanvas(canvasLength, canvasHeight)
}

function draw() { //draw function runs 60 times a second
  background(100)

  if (moving) {
    //x axis movement
    if (positionx == 0) {
      xDirection = true
    }
    if (positionx == canvasLength) {
      xDirection = false
    }

    if (xDirection) {
      positionx = positionx + speedx
    }
    else {
      positionx = positionx - speedx
    }

    //y axis movement
    if (positiony == 0) {
      yDirection = true
    }
    if (positiony == canvasHeight) {
      yDirection = false
    }

    if (yDirection) {
      positiony = positiony + speedy
    }
    else {
      positiony = positiony - speedy
    }

  }

  ellipse(positionx, positiony, 10, 10)
  rect(350, ypaddle, 10, paddleHeight)

  //paddle movement controls
  if (keyIsPressed) {
    if (key == 'w' && ypaddle > 0) {
      ypaddle = ypaddle - 5
    }
    if (key == 's' && ypaddle < canvasHeight - paddleHeight) {
      ypaddle = ypaddle + 5
    }
  }

  if (positionx == 350 && ypaddle < positiony && positiony < (ypaddle + 50)) {
    xDirection = false
  }








  // text('My name is ' + name, 10, 30)
  // console.log('The position is ' + position)

  // console.log("value of moving is " + moving)


}

function mousePressed() {
  moving = !moving
}
