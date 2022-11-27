sound_hey = " ";
sound_dreams = " ";

function preload()
{
 sound_hey = loadSound("hey.mp3");
 sound_dreams = loadSound("dreams.mp3");
}

function setup()
{
 canvas = createCanvas(500, 500);
 canvas.center();

 video = createCapture(VIDEO);
 video.hide();
}

function draw()
{
 image(video, 0, 0, 600, 500);
}