
var sound;
var spectrum;
var fft;
function preload(){
  sound = loadSound('rockin-robin.mp3');
}
var testArray = ["dog", "cat", "bird"];
function setup(){
  var canvas = createCanvas(200,100);
  background("orange");
  canvas.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(1);
  //var getStuff = document.querySelector("#getStuffButton");
  //getStuff.addEventListener("click", getArray);
  frameRate(40);
  var box1 = document.querySelector("#box1");
  var box2 = document.querySelector("#box2");
  var box3 = document.querySelector("#box3");
  var box4 = document.querySelector("#box4");
  var box5 = document.querySelector("#box5");
  var box6 = document.querySelector("#box6");
  var box7 = document.querySelector("#box7");
  var box8 = document.querySelector("#box8");
  var box9 = document.querySelector("#box9");
  var box10 = document.querySelector("#box10");
  var box11 = document.querySelector("#box11");
}
//var counter = 0;


function draw(){
  spectrum = fft.analyze();

  text('click to play/pause', 4, 10);
  //counter++;

  var awesomeSauce = getArray();
  var height1 = awesomeSauce[0];
  var height2 = awesomeSauce[1];
  var height3 = awesomeSauce[2];
  var height4 = awesomeSauce[3];
  var height5 = awesomeSauce[4];
  var height6 = awesomeSauce[5];
  var height7 = awesomeSauce[6];
  var height8 = awesomeSauce[8];
  var height9 = awesomeSauce[9];
  var height10 = awesomeSauce[10];
  var height11 = awesomeSauce[11];
  box1.setAttribute("height", height1/700);
  box2.setAttribute("height", height2/700);
  box3.setAttribute("height", height3/700);
  box4.setAttribute("height", height4/700);
  box5.setAttribute("height", height5/700);
  box6.setAttribute("height", height6/700);
  box7.setAttribute("height", height7/700);
  box8.setAttribute("height", height8/700);
  box9.setAttribute("height", height9/700);
  box10.setAttribute("height", height10/700);

}

function getArray(){
  var spectrumMoment = spectrum;
  var theArray = [];
  var total1 = 0;
  var total2 = 0;
  var total3 = 0;
  var total4 = 0;
  var total5 = 0;
  var total6 = 0;
  var total7 = 0;
  var total8 = 0;
  var total9 = 0;
  var total10 = 0;
  var total11 = 0;

  for (var i = 0; i < spectrumMoment.length; i++){
    if ((i >= 0) && (i <= 40)){
      total1 += spectrumMoment[i];
    }
    if ((i >= 41) && (i <= 80)){
      total2 += spectrumMoment[i];
    }
    if ((i >= 81) && (i <= 120)){
      total3 += spectrumMoment[i];
    }
    if ((i >= 121) && (i <= 160)){
      total4 += spectrumMoment[i];
    }
    if ((i >= 161) && (i <= 200)){
      total5 += spectrumMoment[i];
    }
    if ((i >= 201) && (i <= 240)){
      total6 += spectrumMoment[i];
    }
    if ((i >= 241) && (i <= 280)){
      total7 += spectrumMoment[i];
    }
    if ((i >= 281) && (i <= 320)){
      total8 += spectrumMoment[i];
    }
    if ((i >= 321) && (i <= 360)){
      total9 += spectrumMoment[i];
    }
    if ((i >= 361) && (i <= 400)){
      total10 += spectrumMoment[i];
    }
    if ((i >= 401) && (i <= 440)){
      total11 += spectrumMoment[i];
    }
  }

  theArray.push(total1);
  theArray.push(total2);
  theArray.push(total3);
  theArray.push(total4);
  theArray.push(total5);
  theArray.push(total6);
  theArray.push(total7);
  theArray.push(total8);
  theArray.push(total9);
  theArray.push(total10);
  theArray.push(total11);

  return theArray;
}


function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
