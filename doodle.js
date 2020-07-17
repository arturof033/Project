var diameter, colorFill;

function setup() {
  createCanvas(1260, 550);
  background(240, 240, 240);
  diameter = 10;
  colorFill = color(0); //starts the draw color as black
}

// drawing
function mouseDragged() {
  if (mouseX > 85 && mouseX < 1165 && mouseY > 10 && mouseY < 460) {
    noStroke();
    fill(colorFill); //makes drawing the color that you chose
    ellipse(mouseX, mouseY, diameter);
  }
}

function draw() {
  noStroke();
  // colors
  fill(255, 0, 0);
  rect(0, 470, 126, 80);

  fill(255, 165, 0);
  rect(126, 470, 126, 80);

  fill(255, 255, 0);
  rect(252, 470, 126, 80);

  fill(50, 205, 50);
  rect(378, 470, 126, 80);

  fill(135, 206, 250);
  rect(504, 470, 126, 80);

  fill(0, 0, 255);
  rect(630, 470, 126, 80);

  fill(128, 0, 128);
  rect(756, 470, 126, 80);

  fill(255, 255, 255);
  rect(882, 470, 126, 80);

  fill(0, 0, 0);
  rect(1008, 470, 126, 80);

  fill(160, 82, 45);
  rect(1134, 470, 126, 80);

  // Eraser
  fill(189, 189, 189);
  ellipse(1200, 350, 55, 55);

  fill(255, 255, 255);
  rect(1190, 335, 20, 10);

  fill(110, 110, 110);
  rect(1190, 345, 20, 20);

  // pencil size
  fill(189, 189, 189);
  triangle(35, 250, 55, 230, 75, 250);
  triangle(35, 350, 55, 370, 75, 350);
  ellipse(55, 300, diameter);

  // Erase all
  fill(189, 189, 189);
  ellipse(1200, 250, 55, 55);

  stroke(255, 255, 255);
  strokeWeight(5);
  line(1185, 235, 1215, 265);
  line(1215, 235, 1185, 265);
}

function mouseClicked() {
  //pencl size
  if (mouseX > 35 && mouseX < 75 && mouseY > 230 && mouseY < 250) {
    diameter += 5;
    // limits of the pencil size
    if (diameter >= 50) {
      diameter = 50;
    }
  }
  if (mouseX > 35 && mouseX < 75 && mouseY > 350 && mouseY < 370) {
    diameter -= 5;
    // limits of the pencil size
    if (diameter <= 5) {
      diameter = 5;
    }
  }
  // erase all
  if (mouseX > 1175 && mouseX < 1225 && mouseY > 225 && mouseY < 275) {
    background(240, 240, 240);
  }

  //choosing colors
  //red
  if (mouseX > 0 && mouseX < 126 && mouseY > 470 && mouseY < 550) {
    colorFill = color(255, 0, 0);
  }

  //orange
  if (mouseX > 126 && mouseX < 252 && mouseY > 470 && mouseY < 550) {
    colorFill = color(255, 165, 0);
  }

  //yellow
  if (mouseX > 252 && mouseX < 378 && mouseY > 470 && mouseY < 550) {
    colorFill = color(255, 255, 0);
  }

  // green
  if (mouseX > 378 && mouseX < 504 && mouseY > 470 && mouseY < 550) {
    colorFill = color(50, 205, 50);
  }

  // light blue
  if (mouseX > 504 && mouseX < 630 && mouseY > 470 && mouseY < 550) {
    colorFill = color(135, 206, 250);
  }

  // blue
  if (mouseX > 630 && mouseX < 756 && mouseY > 470 && mouseY < 550) {
    colorFill = color(0, 0, 255);
  }

  // violet
  if (mouseX > 756 && mouseX < 882 && mouseY > 470 && mouseY < 550) {
    colorFill = color(128, 0, 128);
  }

  // white
  if (mouseX > 882 && mouseX < 1008 && mouseY > 470 && mouseY < 550) {
    colorFill = color(255, 255, 255);
  }

  //black
  if (mouseX > 1008 && mouseX < 1134 && mouseY > 470 && mouseY < 550) {
    colorFill = color(0, 0, 0);
  }

  //brown
  if (mouseX > 1134 && mouseX < 1260 && mouseY > 470 && mouseY < 550) {
    colorFill = color(160, 82, 45);
  }

  //eraser
  if (mouseX > 1170 && mouseX < 1230 && mouseY > 320 && mouseY < 380) {
    colorFill = color(240, 240, 240);
  }
}
