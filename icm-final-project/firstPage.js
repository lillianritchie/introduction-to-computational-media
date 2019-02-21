//draw the shape buttons
function drawSigns() {

  //overall circle
  //ellipse(width / 2, height / 2, width * 3 / 4, height * 3/4);
  strokeWeight(8)
  //noon
  if (mouseX > height / 2 - height / 14 && mouseX < width / 2 + height / 14 &&
    mouseY > height / 8 - height / 14 && mouseY < height / 8 + height / 14) {
    stroke(255, 70, 70);
    fill(255, 0, 0)
    ellipse(height / 2, height / 8, height / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("aries", height / 2, height / 8);
    pop();
  } else {
    stroke(175, 0, 0)
    fill(255, 0, 0)
    ellipse(width / 2, height / 8, width / 7, height / 7);
    image(aries, width / 2, height / 8);
  }


  //one oclock
  if (mouseX > width * 0.69 - width / 14 && mouseX < width * 0.69 + width / 14 &&
    mouseY > height * 0.175 - height / 14 && mouseY < height * 0.175 + height / 14) {
    stroke(255, 157, 50);
    fill(254, 107, 0);
    ellipse(width * 0.69, height * 0.175, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("leo", width * 0.69, height * 0.175);
    pop();
  } else {
    stroke(204, 57, 0);
    fill(254, 107, 0);
    ellipse(width * 0.69, height * 0.175, width / 7, height / 7);
    image(leo, width * 0.69, height * 0.175);
  }

  //two oclock
  if (mouseX > width * 0.825 - width / 14 && mouseX < width * 0.825 + width / 14 &&
    mouseY > height * 0.31 - height / 14 && mouseY < height * 0.31 + height / 14) {
    stroke(255, 219, 50);
    fill(254, 169, 0);
    ellipse(width * 0.825, height * 0.31, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(27);
    textAlign(CENTER, CENTER);
    text("saggitarius ", width * 0.825, height * 0.31);
    pop();
  } else {
    stroke(204, 119, 0);
    fill(254, 169, 0);
    ellipse(width * 0.825, height * 0.31, width / 7, height / 7);
    image(sagg, width * 0.825, height * 0.31);
  }

  //three
  if (mouseX > width * 7 / 8 - width / 14 && mouseX < width * 7 / 8 + width / 14 &&
    mouseY > height / 2 - height / 14 && mouseY < height / 2 + height / 14) {
    stroke(255, 255, 50);
    fill(254, 224, 0);
    ellipse(width * 7 / 8, height / 2, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("capricorn", width * 7 / 8, height / 2);
    pop();
  } else {
    stroke(204, 174, 0);
    fill(254, 224, 0);
    ellipse(width * 7 / 8, height / 2, width / 7, height / 7);
    image(capricorn, width * 7 / 8, height / 2);
  }


  //four
  if (mouseX > width * 0.825 - width / 14 && mouseX < width * 0.825 &&
    mouseY > height * 0.69 - height / 14 && mouseY < height * 0.69 + height / 14) {
    stroke(230, 255, 50);
    fill(180, 254, 0);
    ellipse(width * 0.825, height * 0.69, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("virgo", width * 0.825, height * 0.69);
    pop();
  } else {
    stroke(130, 204, 0);
    fill(180, 254, 0);
    ellipse(width * 0.825, height * 0.69, width / 7, height / 7);
    image(virgo, width * 0.825, height * 0.69);
  }

  //five
  if (mouseX > width * 0.69 - width / 14 && mouseX < width * 0.69 + width / 14 &&
    mouseY > height * 0.825 - height / 14 && mouseY < height * 0.825 + height / 14) {
    stroke(177, 255, 50);
    fill(127, 248, 0);
    ellipse(width * 0.69, height * 0.825, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("taurus", width * 0.69, height * 0.825);
    pop();
  } else {
    stroke(77, 198, 0);
    fill(127, 248, 0);
    ellipse(width * 0.69, height * 0.825, width / 7, height / 7);
    image(taurus, width * 0.69, height * 0.825);
  }

  //six
  if (mouseX > width / 2 - width / 14 && mouseX < width / 2 + width / 14 &&
    mouseY > height * 7 / 8 - height / 14 && mouseY < height * 7 / 8 + height / 14) {
    stroke(50, 255, 50);
    fill(0, 214, 0);
    ellipse(width / 2, height * 7 / 8, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("cancer", width / 2, 7 * height / 8);
    pop();
  } else {
    stroke(0, 164, 0);
    fill(0, 214, 0);
    ellipse(width / 2, height * 7 / 8, width / 7, height / 7);
    image(cancer, width / 2, 7 * height / 8);
  }

  //seven
  if (mouseX > width * 0.31 - width / 14 && mouseX < width * 0.31 + width / 14 &&
    mouseY > height * 0.825 - height / 14 && mouseY < height * 0.825 + height / 14) {
    stroke(50, 205, 205);
    fill(0, 155, 155);
    ellipse(width * 0.31, height * 0.825, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("scorpio", width * 0.31, height * 0.825);
    pop();
  } else {
    stroke(0, 105, 105);
    fill(0, 155, 155);
    ellipse(width * 0.31, height * 0.825, width / 7, height / 7);
    image(scorpio, width * 0.31, height * 0.825);
  }

  //eight
  if (mouseX > width * 0.175 - width / 14 && mouseX < width * 0.175 + width / 14 &&
    mouseY > height * 0.69 - height / 14 && mouseY < height * 0.69 + height / 14) {
    stroke(77, 96, 227);
    fill(27, 46, 177);
    ellipse(width * 0.175, height * 0.69, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("pisces", width * 0.175, height * 0.69);
    pop();
  } else {
    stroke(0, 0, 127);
    fill(27, 46, 177);
    ellipse(width * 0.175, height * 0.69, width / 7, height / 7);
    image(pisces, width * 0.175, height * 0.69);
  }

  //nine
  if (mouseX > width / 8 - width / 14 && mouseX < width / 8 + width / 14 &&
    mouseY > height / 2 - height / 14 && mouseY < height / 2 + height / 14) {
    stroke(120, 50, 231);
    fill(70, 0, 181);
    ellipse(width / 8, height / 2, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("aquarius", width / 8, height / 2);
    pop();
  } else {
    stroke(20, 0, 131);
    fill(70, 0, 181);
    ellipse(width / 8, height / 2, width / 7, height / 7);
    image(aqua, width / 8, height / 2);
  }

  //ten
  if (mouseX > width * 0.175 - width / 14 && mouseX < width * 0.175 + width / 14 &&
    mouseY > height * 0.31 - height / 14 && mouseY < height * 0.31 + height / 14) {
    stroke(176, 50, 225);
    fill(126, 0, 175);
    ellipse(width * 0.175, height * 0.31, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("gemini", width * 0.175, height * 0.31);
    pop();
  } else {
    stroke(76, 0, 125);
    fill(126, 0, 175);
    ellipse(width * 0.175, height * 0.31, width / 7, height / 7);
    image(gemini, width * 0.175, height * 0.31);
  }

  //eleven
  if (mouseX > width * 0.31 - width / 14 && mouseX < width * 0.31 + width / 14 &&
    mouseY > height * 0.175 - height / 14 && mouseY < height * 0.175 + height / 14) {
    stroke(255, 50, 164);
    fill(222, 0, 114);
    ellipse(width * 0.31, height * 0.175, width / 7, height / 7);
    push();
    noStroke();
    fill(20, 0, 60);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("libra", width * 0.31, height * 0.175);
    pop();
  } else {
    stroke(72, 0, 64);
    fill(222, 0, 114);
    ellipse(width * 0.31, height * 0.175, width / 7, height / 7);
    image(libra, width * 0.31, height * 0.175);
  }
}

//write out the user instructions
function writeInstructions() {
  noStroke();
  fill(252, 118, 172);
  textSize(54)
  text('my name is', width / 2, height / 3)
  text('i was born in', width / 2, height * 1 / 2);
  textSize(25);
  text('click on your sign to get your horoscope!', width / 2, height * 2 / 3)
}