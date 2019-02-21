let loveProspects;
let healthProspects;
let businessProspects
let greetingP;
let horoscopeP;
let astroP;


//function to set variables for horoscope outcomes
function setProspects(temperature, clouds, humidity) {
  print(temperature);
  print(clouds);
  print(humidity);


  //set love prospects based on temperature
  //temperature high =305K, temperature low =270K

  if (temperature <= 270) {
    loveProspects = "really awful!";
  } else if (temperature > 270 && temperature <= 277) {
    loveProspects = "not good..."
  } else if (temperature > 277 && temperature <= 284) {
    loveProspects = "more or less neutral.";
  } else if (temperature > 284 && temperature <= 291) {
    loveProspects = "not the WORST!";
  } else if (temperature > 291 && temperature <= 298) {
    loveProspects = "pretty darn good!";
  } else if (temperature > 298 && temperature <= 305) {
    loveProspects = "excellent! go ask someone out!!";
  } else if (temperature > 305) {
    loveProspects = "OFF THE CHARTS! Sexiest person alive!"
  };
  console.log("temp = " + temperature);
  // console.log(loveProspects);


  //set health prospects by clouds
  //clouds 0-100%
  if (clouds <= 20) {
    healthProspects = "terrible! Keep your doctor on speed dial this week, okay?";
  } else if (clouds > 20 && clouds <= 40) {
    healthProspects = "not the greatest. Don't forget your vitamin C!"
  } else if (clouds > 40 && clouds <= 60) {
    healthProspects = "hard to say, really. It could go either way.";
  } else if (clouds > 60 && clouds <= 80) {
    healthProspects = "great. you can expect to feel an extra pep in your step.";
  } else if (clouds > 80) {
    healthProspects = "Astounding. You're pretty much invincible this week.";
  };

  //set business by humidity
  if (humidity <= 40) {
    businessProspects = "catastrophic. If you can, avoid even going outside.";
  } else if (humidity > 40 && humidity <= 50) {
    businessProspects = "pretty awful."
  } else if (humidity > 50 && humidity <= 60) {
    businessProspects = "neither good nor bad. A little elbow grease will go a long way this week.";
  } else if (humidity > 60 && humidity <= 70) {
    businessProspects = "not terrible... but you may want to count on working a little overtime.";
  } else if (humidity > 70 && humidity <= 75) {
    businessProspects = "looking positive. Maybe a new project is headed your way?";
  } else if (humidity > 75 && humidity <= 80) {
    businessProspects = "great! There may be a raise or a job offer in your future.";
  } else if (humidity > 80) {
    businessProspects = "Astronomical! Quit your job and start your own empire! Now is the time!"
  }
  //set special message

}

function writeHoroscope() {

  if (greetingP) {
    greetingP.remove();
  }
  if (horoscopeP) {
    horoscopeP.remove();
  }
  if (astroP) {
    astroP.remove();
  }

  textSize(36);
  noStroke();



  greetingP = createP("hello there, " + name + "!");
  horoscopeP = createP("The winds have spoken! ... and they seem to be saying that you can expect your health this week to be " + healthProspects + "   your prospects for love this week are " + loveProspects + "   and your business prospects are looking " + businessProspects, width / 2, height * 6 / 10);
  astroP = createP(astrologySpecial)


}