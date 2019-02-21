  let ariesSpecial = "Finally, we know you can be a little impatient, Aries, but keep your cool this week and something good will come your way!";
  let leoSpecial = "Are you not getting the attention you deserve this week, leo? Try a splashy new hat!";
  let saggitariusSpecial = "It's birthday season, Saggitarius. You know what that means: treat yo'self!";
  let capricornSpecial = "Finally, Let yourself off the hook this week, capricorn. There's a lot to do this time of year, but rest assured you have it under control!";
  let virgoSpecial = "Lastly, Lean into your passion for learning this week, Libra. Try picking up a new skill!";
  let taurusSpecial = "Finally,You're known for being honest, taurus, but this week you may finding yourself take that honesty to a new leverl. be careful not to offend anyone dear to you.";
  let cancerSpecial = "Finally, Wouldnt it be nice to spend this week on the couch with a book, crab? \ Now would be an excellent time to indulge!";
  let scorpioSpecial = "Lastly, One of your loved ones may ask something BIG from you this week. You should do it, whatever it is. (We know, you were going to anyway)";
  let piscesSpecial = "Finally, We know you're always looking out for others, pisces, but this week, don't forget to carve out a little bit of time for you.";
  let aquariusSpecial = "Finally, Remember that song from hair? 'This is the dawning of the age of aquarius'? Try setting that as your alarm this week and get PUMPED in the mornings!";
  let geminiSpecial = "Finally,When something goes wrong this week, gemini, don't hesitate to blame your evil twin!";
  let libraSpecial = "Finally, We know you usually prefer to keep it diplomatic, Libra, but this week... let it all hang out! Speak your mind and good things will happen.";


  function setMySign() {
    if(mySign == undefined) {
    if (mouseX > height / 2 - height / 14 && mouseX < width / 2 + height / 14 &&
      mouseY > height / 8 - height / 14 && mouseY < height / 8 + height / 14) {
      mySign = "aries";
      astrologySpecial = ariesSpecial;
    } else if (mouseX > width * 0.69 - width / 14 && mouseX < width * 0.69 + width / 14 &&
      mouseY > height * 0.175 - height / 14 && mouseY < height * 0.175 + height / 14) {
      mySign = "leo";
      astrologySpecial = leoSpecial;
    } else if (mouseX > width * 0.825 - width / 14 && mouseX < width * 0.825 + width / 14 &&
      mouseY > height * 0.31 - height / 14 && mouseY < height * 0.31 + height / 14) {
      mySign = "saggitarius";
      astrologySpecial = saggitariusSpecial;
    } else if (mouseX > width * 7 / 8 - width / 14 && mouseX < width * 7 / 8 + width / 14 &&
      mouseY > height / 2 - height / 14 && mouseY < height / 2 + height / 14) {
      mySign = "capricorn";
      astrologySpecial = capricornSpecial;

    } else if (mouseY > height * 0.69 - height / 14 && mouseY < height * 0.69 + height / 14) {
      mySign = "virgo";
      astrologySpecial = virgoSpecial;
    } else if (mouseX > width * 0.69 - width / 14 && mouseX < width * 0.69 + width / 14 &&
      mouseY > height * 0.825 - height / 14 && mouseY < height * 0.825 + height / 14) {
      mySign = "taurus";
      astrologySpecial = taurusSpecial;
    } else if (mouseX > width / 2 - width / 14 && mouseX < width / 2 + width / 14 &&
      mouseY > height * 7 / 8 - height / 14 && mouseY < height * 7 / 8 + height / 14) {
      mySign = "cancer";
      astrologySpecial = cancerSpecial;
    } else if (mouseX > width * 0.31 - width / 14 && mouseX < width * 0.31 + width / 14 &&
      mouseY > height * 0.825 - height / 14 && mouseY < height * 0.825 + height / 14) {
      mySign = "scorpio";
      astrologySpecial = scorpioSpecial;

    } else if (mouseX > width * 0.175 - width / 14 && mouseX < width * 0.175 + width / 14 &&
      mouseY > height * 0.69 - height / 14 && mouseY < height * 0.69 + height / 14) {
      mySign = "pisces";
      astrologySpecial = piscesSpecial;

    } else if (mouseX > width / 8 - width / 14 && mouseX < width / 8 + width / 14 &&
      mouseY > height / 2 - height / 14 && mouseY < height / 2 + height / 14) {
      mySign = "aquarius";
      astrologySpecial = aquariusSpecial;

    } else if (mouseX > width * 0.175 - width / 14 && mouseX < width * 0.175 + width / 14 &&
      mouseY > height * 0.31 - height / 14 && mouseY < height * 0.31 + height / 14) {
      mySign = "gemini";
      astrologySpecial = geminiSpecial;

    } else if (mouseX > width * 0.31 - width / 14 && mouseX < width * 0.31 + width / 14 &&
      mouseY > height * 0.175 - height / 14 && mouseY < height * 0.175 + height / 14) {
      mySign = "libra";
      astrologySpecial = libraSpecial;
    }
    }
  }