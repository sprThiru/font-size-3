function setup()
{
  canvas=createCanvas(500,530);
  canvas.position(5,110);
  video=createCapture(VIDEO);
  video.size(500,530);
  video.hide();
  
  poseNet = ml5.poseNet(video,modelLoaded);

  poseNet.on('pose',gotPoses);

}

function gotPoses(results)
{
  if (results.length > 0)
  {
    console.log(results);
  } 
}

function modelLoaded()
{
  console.log('Pose Net Inilized');
}

function draw()
{
  image(video,0,0,500,530);
}