//images
let aries;
let leo;
let sagg;
let libra;
let aqua;
let gemini;
let cancer;
let cancerBG;
let pisces;
let scorpio;
let virgo;
let taurus;
let capricorn;
//fonts
let lemon;
let song;
//inputs
let nameInput;
let placeInput;
let name
let nameArray
let cityArray;
let city = "New+York";
let country = "USA";
let countryArray;
let mySign;
let astrologySpecial;

//api
let apiKey = "&apiKey=40b7feb18db60012ff682f454699cf1f"
let query = "https://api.openweathermap.org/data/2.5/weather?q="
let connector = "%2C"
let url;
let data;
let myTemperature;
let myHumidity;
let myClouds;
let myWind;
let weatherSpeed;


function preload() {

  //astrological symbols
  aries = loadImage('/assets/aries.png', width / 8, height / 8);
  leo = loadImage('/assets/leo.png', width / 8, height / 8);
  sagg = loadImage('/assets/saggitarius.png', width / 8, height / 8);
  libra = loadImage('/assets/libra.png', width / 8, height / 8);
  aqua = loadImage('/assets/aquarius.png', width / 8, height / 8);
  gemini = loadImage('/assets/gemini.png', width / 8, height / 8);
  cancer = loadImage('/assets/cancer.png', width / 8, height / 8);
  pisces = loadImage('/assets/pisces.png', width / 8, height / 8);
  scorpio = loadImage('/assets/scorpio.png', width / 8, height / 8);
  virgo = loadImage('/assets/virgo.png', width / 8, height / 8);
  taurus = loadImage('/assets/taurus.png', width / 8, height / 8);
  capricorn = loadImage('/assets/capricorn.png', width / 8, height / 8);


  //fonts
  song = loadFont('assets/song.ttf');
  lemon = loadFont('assets/lemonyellow.otf');

}

function setup() {
  let cnv = createCanvas(800, 800);
  cnv.position((windowWidth - cnv.width) / 2, 0)
  imageMode(CENTER);
  textAlign(CENTER);
  textFont(lemon);

  //name input field
  nameInput = createInput('Name');
  nameInput.input(setName);
  nameInput.size(300, 50);
  nameInput.position(windowWidth / 2 - nameInput.width / 2, cnv.height * 9 / 25);
  //city input field
  cityInput = createInput('City');
  cityInput.input(setCity);
  cityInput.size(150, 50);
  cityInput.position(windowWidth / 2 - cityInput.width, cnv.height * 13 / 25);
  //country input field
  countryInput = createInput('Country');
  countryInput.input(setCountry);
  countryInput.size(150, 50);
  countryInput.position(windowWidth / 2, cnv.height * 13 / 25);


}

function gotData(dataResult) {

  print("I HATH RECIEVED DATUMS");
  //temperature = int(map(data.data.current.weather.tp, -40, 45, 0, 5));

  data = dataResult;

  print(JSON.stringify(data, null, null));
  print("got data:" + data.main.temp);

  myTemperature = data.main.temp;
  myHumidity = data.main.humidity;
  myWind = data.wind.speed;
  myClouds = data.clouds.all;

  print("temperature = " + myTemperature);
  print("humidity = " + myHumidity);
  print("clouds= " + myClouds);

  //setup and write horoscopes
  setProspects(myTemperature, myClouds, myHumidity);
  writeHoroscope();





}

function draw() {

  clear();

  if (mySign == undefined) {
    writeInstructions();
    drawSigns();
    setName();
    setCity();
  }
}



//set the user's name variable
function setName() {
  name = nameInput.value();
  //console.log(name);
}

//set the value of the city to search
function setCity() {
  cityArray = splitTokens(cityInput.value());
  city = join(cityArray, "+");
  //console.log(city);
}
//set the value of the country to search
function setCountry() {
  countryArray = splitTokens(countryInput.value());
  country = join(countryArray, "+");
  //console.log(country);
}

//load horoscope page
function mouseClicked() {
  print("got some sweet clicks, gonna throw some stuff on the screen now");
  setMySign();

  if (mySign) {
    nameInput.remove();
    cityInput.remove();
    countryInput.remove();

    //request from Weather API
    url = query + city + connector + country + apiKey;
    console.log(url);
    loadJSON(url, gotData);

  }
}