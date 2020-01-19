function setup() {

  angleMode(DEGREES);
  strokeWSlider = createSlider(1, 25, 4, 1);
  strokeWSlider.position(30, 10);

  createCanvas(1000, 1000);
  background(0);

  noFill();
  rect(0, 0, 20, 140);
  let c1 = color(214, 39, 39);
  fill(c1);
  noStroke();
  circle(10, 10, 20);
  let c2 = color(214, 138, 39);
  fill(c2);
  noStroke();
  circle(10, 30, 20);
  let c3 = color(214, 182, 39);
  fill(c3);
  noStroke();
  circle(10, 50, 20);
  let c4 = color(71, 214, 39);
  fill(c4);
  noStroke();
  circle(10, 70, 20);
  let c5 = color(51, 124, 196);
  fill(c5);
  noStroke();
  circle(10, 90, 20);
  let c6 = color(85, 51, 196);
  fill(c6);
  noStroke();
  circle(10, 110, 20);
  let c7 = color(157, 51, 196);
  fill(c7);
  noStroke();
  circle(10, 130, 20);
}

let pickedColor = [255, 255, 0];

function draw() {
  translate(width / 2, height / 2);

  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;

  let val = strokeWSlider.value();


  if (mouseIsPressed) {

    for (let i = 0; i < 24; i++) {
      push();

      rotate(i * 15)
      if (i % 2 == 0)
        scale(-1, 1);

      stroke(pickedColor);
      print(pickedColor);
      strokeWeight(val);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
}


function mousePressed() {
  if ((mouseX >= 0 && 20 >= mouseX) && (mouseY >= 0 && 20 >= mouseY)) {
    pickedColor = color(214, 39, 39, 100);
  } else if ((mouseX >= 0 && 20 >= mouseX) && (mouseY >= 20 && 40 >= mouseY)) {
    pickedColor = color(214, 138, 39, 100);
  } else if ((mouseX >= 0 && 20 >= mouseX) && (mouseY >= 40 && 60 >= mouseY)) {
    pickedColor = color(214, 182, 39, 100);
  } else if ((mouseX >= 0 && 20 >= mouseX) && (mouseY >= 60 && 80 >= mouseY)) {
    pickedColor = color(71, 214, 39, 100);
  } else if ((mouseX >= 0 && 20 >= mouseX) && (mouseY >= 80 && 100 >= mouseY)) {
    pickedColor = color(51, 124, 196, 100);
  } else if ((mouseX >= 0 && 20 >= mouseX) && (mouseY >= 100 && 120 >= mouseY)) {
    pickedColor = color(85, 51, 196, 100);
  } else if ((mouseX >= 0 && 20 >= mouseX) && (mouseY >= 120 && 140 >= mouseY)) {
    pickedColor = color(157, 51, 196, 100);
  }

}
