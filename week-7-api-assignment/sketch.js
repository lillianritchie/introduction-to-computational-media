let img;

function setup() {
  noCanvas();
  let corgi = createButton('CORGI', 'corgi');
  corgi.mousePressed(fetchImage);
  let frenchie = createButton('FRENCHIE');
  frenchie.mousePressed(fetchImage.bind(this, 'FRENCHIE'));
  let dane = createButton('GREAT DANE');
  dane.mousePressed(fetchImage.bind(this, 'great dane'));
  let pug = createButton('PUG');
  pug.mousePressed(fetchImage.bind(this, 'pug'));
  let cat = createButton('I PREFER CATS');
  cat.mousePressed(fetchImage.bind(this,'nooooooo'));
  createP();
 
}


function fetchImage(dogType){
  	console.log(dogType);
    let searchTerm = dogType;
    let limit = "&limit=25";
    let api = "https://api.giphy.com/v1/gifs/search?api_key=bRM31CoZvLAgZsmWYIoaSwGmRcYJ3jap&q=";
    let giphyURL = api + searchTerm + limit;
  
    loadJSON(giphyURL, gotData);
  
    function gotData(giphy) {
      if(img){
      	img.remove();
      }
      // slight change of var name:
      let gifNumber = round(random(0,24));
      console.log(gifNumber);
    	let imgURL = giphy.data[gifNumber].images.original.url;
      // save img, so we replace it
      img = createImg(imgURL);
    
    }  
}

  