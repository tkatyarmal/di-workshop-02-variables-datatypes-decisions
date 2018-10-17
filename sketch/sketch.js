var positionx = 100
var positiony = 0

var speedx = 10
var speedy = 10

var name = "Tejas"
var moving = true
var hDirection = true
var vDirection = true
var len = 400
var hei = 400

var ypaddle = 100
var paddleHeight = 50

function setup() {
  createCanvas(len, hei)
  //frameRate (1000)
}

function draw() { //draw function runs 60 times a second
  background(100)
  
  if (moving) {
    
    //x axis movement
    if (positionx == 0){
      hDirection = true
    }
    if (positionx == len) {
      hDirection = false
    }

    if(hDirection)  {
      positionx = positionx + speedx
    }
    else { 
      positionx = positionx - speedx
    }

    //y axis movement
    if (positiony == 0){
      vDirection = true
    }
    if (positiony == hei) {
      vDirection = false
    }

    if(vDirection)  {
      positiony = positiony + speedy
    }
    else { 
      positiony = positiony - speedy
    }

  }

  ellipse(positionx, positiony, 10, 10)
  rect(385,ypaddle,10,paddleHeight)




  if (keyIsPressed) {
    if (key == 'w' && ypaddle>0) {
      ypaddle = ypaddle - 10
    }
    if (key == 's' && ypaddle<hei-paddleHeight) {
      ypaddle = ypaddle + 10
    }
  }

 // text('My name is ' + name, 10, 30)
 // console.log('The position is ' + position)

 // console.log("value of moving is " + moving)


}

function mousePressed() {
  moving = !moving
}
