
let video;
let poseNet;
let poses = [];
let leftEye;
let rightEye;
let pictureFrame;

function preload(){
  fontRegular = loadFont("MotionPicture.ttf");
}


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  //load, label, and set up the mode for the eyes
  leftEye = loadImage("google-left.png");
  rightEye = loadImage("google-right.png");
  pictureFrame = loadImage("pictureframe.png")
 
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 30,30, width-60, height-60);
  image(pictureFrame,0,0,width,height);

  //don't draw skeletons, just keypoints
  drawKeypoints();
  
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, look for the two keypoints indicating eyes.
    let pose = poses[i].pose;
    for (let j = 1; j < 3; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only place a googly eye is the pose probability is bigger than 0.2
      if (j==1 && keypoint.score > 0.2) {
        image(rightEye, keypoint.position.x-35, keypoint.position.y-30, 70, 70);
      }
      else if (j==2 && keypoint.score > 0.2)
        image(leftEye, keypoint.position.x-35, keypoint.position.y-30, 70, 70);
    }
  }
}

