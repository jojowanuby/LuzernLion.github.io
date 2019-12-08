//inspiration: https://codepen.io/FabioG/pen/JdmJLK


var canvas = document.querySelector('canvas')


var size = Math.min(window.innerWidth, window.innerHeight) / 50;
var angle = 0;
var iterator = 0;
var speed = 1.5; 
var colors = [
  'rgb(19, 166, 144)',
  'rgb(145, 219, 207)',
  'rgb(235, 218, 204)'
];
var loopId, canvas, ctx;

init()

function init() {
  //Get canvas & context
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  size = Math.min(window.innerWidth, window.innerHeight) / 50;
  //initialise animation
  startAnimation();
}

function animationLoop(timeStamp) {
  // 1 - Clear & resize
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  size = Math.min(window.innerWidth, window.innerHeight) / 50;
  // 2 Draw
  drawCat();
  // 3 Move
  updateTailAngle();
  // call again mainloop after 16.6ms (corresponds to 60 frames/second)
  id = requestAnimationFrame(animationLoop);
}

function startAnimation() {
  loopId = requestAnimationFrame(animationLoop);
}

function stopAnimation() {
  if (loopId) {
    cancelAnimationFrame(loopId);
  }
}

function drawCat() {
  drawBody();
  drawHead();
  drawTail();
}

function updateTailAngle() {
  iterator += speed;
  angle = Math.sin(iterator * Math.PI / 180) * 1.5;
  /*if (iterator >= 180 || iterator <= 0){
		speed = -speed;
	}*/
  size = $(window).width() / 40;
}

function drawBody() {

  ctx.save();

  ctx.translate(canvas.width / 2, canvas.height / 2);
 
  //Foot head
  ctx.beginPath();
  ctx.moveTo(-22, 0);
  ctx.lineTo(-28 * size, 0* size);
  ctx.lineTo(-28 * size, -1* size);
  ctx.lineTo(-26 * size, -4* size);
  ctx.lineTo(-24 * size, -4* size);
  ctx.lineTo(-22 * size, -2* size);
  ctx.lineTo(-22 * size, -0* size);
  ctx.closePath();
  ctx.fillStyle = colors[0];
  ctx.fill(); 


   //Foot back
   ctx.beginPath();
   ctx.moveTo(6* size, 0);
   ctx.lineTo(5 * size, 1* size);
   ctx.lineTo(5 * size, 2* size);
   ctx.lineTo(20 * size, 2* size);
   ctx.lineTo(21 * size, 0* size);
   ctx.lineTo(21 * size, -4* size);
   ctx.lineTo(15 * size, -9* size);
   ctx.lineTo(13 * size, -10* size);
   ctx.lineTo(8 * size, -10* size);
   ctx.lineTo(7 * size, -9* size);
   ctx.lineTo(7 * size, -6* size);
   ctx.lineTo(8 * size, -4* size);
   ctx.lineTo(12 * size, -2* size);
   ctx.lineTo(10 * size, -1* size);
   ctx.lineTo(6 * size, -0* size);
   ctx.closePath();
   ctx.fillStyle = colors[0];
   ctx.fill(); 



  //corpus
  ctx.beginPath();
  ctx.moveTo(0* size, -10* size);
  ctx.lineTo(-3 * size, -11* size);
  ctx.lineTo(-5 * size, -14* size);
  ctx.lineTo(-8 * size, -14* size);
  ctx.lineTo(-10 * size, -9* size);
  ctx.lineTo(-12 * size, -8* size);
  ctx.lineTo(-11 * size, -2* size);
  ctx.lineTo(-13 * size, -0* size);
  ctx.lineTo(-20 * size, 7* size);
  ctx.lineTo(-20 * size, 9* size);
  ctx.lineTo(-15 * size, 9* size);
  ctx.lineTo(-15 * size, 6* size);
  ctx.lineTo(-6 * size, 1* size);
  ctx.lineTo(-5 * size, 0* size);
  ctx.lineTo(4 * size, 0* size);
  ctx.lineTo(4 * size, -2* size);
  ctx.lineTo(5 * size, -3* size);
  ctx.lineTo(8 * size, -3* size);
  ctx.lineTo(10 * size, -1* size);
  ctx.lineTo(12 * size, -2* size);
  ctx.lineTo(8 * size, -4* size);
  ctx.lineTo(7 * size, -6* size);
  ctx.lineTo(7 * size, -9* size);
  ctx.lineTo(3 * size, -9* size);
  ctx.lineTo(0 * size, -10* size);
  ctx.lineTo(-3 * size, -11* size);
  ctx.closePath();
  ctx.fillStyle = colors[1];
  ctx.fill();

  //front arm line
  ctx.beginPath();
  ctx.moveTo(-5 * size, 0 * size);
  ctx.lineTo(-6 * size, -2 * size);
  ctx.lineTo(-6 * size, -6 * size);
  ctx.lineTo(-5 * size, -7 * size);
  ctx.lineTo(-6 * size, -6 * size)
  ctx.lineTo(-6 * size, -2 * size);
  ctx.closePath();
  ctx.lineWidth = size * 0.2;
  ctx.strokeStyle = colors[0];
  ctx.stroke();

  //Foot
  ctx.beginPath();
  ctx.moveTo(10* size, -1* size);
  ctx.lineTo(8 * size, -3* size);
  ctx.lineTo(6 * size, -2* size);
  ctx.lineTo(6 * size, -0* size);
  ctx.lineTo(10 * size, -1* size);
  ctx.closePath();
  ctx.fillStyle = colors[2];
  ctx.fill(); 

  //tatze
  ctx.beginPath();
  ctx.moveTo(6* size, 0* size);
  ctx.lineTo(4 * size, 0* size);
  ctx.lineTo(4 * size, -2* size);
  ctx.lineTo(5 * size, -3* size);
  ctx.lineTo(8 * size, -3* size);
  ctx.lineTo(6 * size, -2* size);
  ctx.lineTo(6 * size, -0* size);
  ctx.closePath();
  ctx.fillStyle = colors[0];
  ctx.fill();


  ctx.restore();
}

function drawHead() {

  ctx.save();

  ctx.translate(canvas.width / 2, canvas.height / 2);

  //Face
  ctx.beginPath();
  ctx.moveTo(-22 * size, -2 * size);
  ctx.lineTo(-24 * size, -4 * size);
  ctx.lineTo(-25 * size, -6 * size);
  ctx.lineTo(-26 * size, -9 * size);
  ctx.lineTo(-25 * size, -12* size);
  ctx.lineTo(-19 * size, -12* size);
  ctx.lineTo(-17 * size, -8* size);
  ctx.lineTo(-16 * size, -4* size);
  ctx.lineTo(-16 * size, -3* size);
  ctx.lineTo(-18 * size, -1* size);
  ctx.closePath();
  ctx.fillStyle = colors[1];
  ctx.fill();

  //hair
  ctx.beginPath();
  ctx.moveTo(-26 * size, -9 * size);
  ctx.lineTo(-25 * size, -12 * size);
  ctx.lineTo(-22 * size, -15 * size);
  ctx.lineTo(-17 * size, -17 * size);
  ctx.lineTo(-11 * size, -16* size);
  ctx.lineTo(-8 * size, -14* size);
  ctx.lineTo(-10 * size, -9* size);
  ctx.lineTo(-12 * size, -8* size);
  ctx.lineTo(-11 * size, -2* size);
  ctx.lineTo(-13 * size, -0* size);
  ctx.lineTo(-16 * size, -3* size);
  ctx.lineTo(-16 * size, -4* size);
  ctx.lineTo(-17 * size, -8* size);
  ctx.lineTo(-19 * size, -12* size);
  ctx.lineTo(-23 * size, -12* size);
  ctx.lineTo(-26 * size, -9* size);
  ctx.closePath();
  ctx.fillStyle = colors[0];
  ctx.fill();

  //noze
  ctx.beginPath();
  ctx.moveTo(-21 * size, -5 * size);
  ctx.lineTo(-22 * size, -5 * size);
  ctx.lineTo(-23 * size, -4 * size);
  ctx.lineTo(-23 * size, -5 * size);
  ctx.lineTo(-21 * size, -7 * size);
  ctx.lineTo(-20 * size, -7 * size);
  ctx.lineTo(-21 * size, -6 * size);
  ctx.closePath();
  ctx.fillStyle = colors[0];
  ctx.fill();

  //Ear1
  ctx.beginPath();
  ctx.moveTo(-21 * size, -13 * size);
  ctx.lineTo(-20 * size, -15 * size);
  ctx.lineTo(-19 * size, -13 * size);
  ctx.closePath();
  ctx.fillStyle = colors[1];
  ctx.fill();

  
  //Eye
  ctx.beginPath();
  ctx.moveTo(-25 * size, -6 * size);
  ctx.lineTo(-25 * size, -7 * size);
  ctx.lineTo(-24 * size, -7 * size);
  ctx.closePath();
  ctx.fillStyle = colors[0];
  ctx.fill();

  //Eye2
  ctx.beginPath();
  ctx.moveTo(-22 * size, -10 * size);
  ctx.lineTo(-20.5 * size, -10 * size);
  ctx.lineTo(-22 * size, -9 * size);
  ctx.closePath();
  ctx.fillStyle = colors[0];
  ctx.fill();

  //Moul
  ctx.beginPath();
  ctx.moveTo(-21.5 * size, -3 * size);
  ctx.lineTo(-19 * size, -5.5 * size);
  ctx.lineTo(-17 * size, -5 * size);
  ctx.lineTo(-19 * size, -4 * size);
  ctx.lineTo(-21 * size, -2 * size);
  ctx.lineTo(-21.5 * size, -3 * size);
  ctx.closePath();
  ctx.fillStyle = colors[0];
  ctx.fill();

  //lipp
  ctx.beginPath();
  ctx.moveTo(-21 * size, -5 * size);
  ctx.lineTo(-20 * size, -4 * size);
  ctx.closePath();
  ctx.lineWidth = size * 0.2;
  ctx.strokeStyle = colors[0];
  ctx.stroke();

  ctx.restore();
}

function drawTail() {

  ctx.save();

  ctx.translate(canvas.width / 2 +21*size, canvas.height / 2+-4*size );
  ctx.rotate(angle * Math.PI / 180);

  //Tail
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(2 * size, 3 * size);
  ctx.lineTo(3* size, 7 * size);
  ctx.lineTo(2* size, 9 * size);
  ctx.lineTo(-4* size, 11 * size);
  ctx.lineTo(-10* size, 10 * size);
  ctx.lineTo(-19* size, 10 * size);
  ctx.lineTo(-21* size, 8 * size);
  ctx.lineTo(-9* size, 8 * size);
  ctx.lineTo(-4* size, 9 * size);
  ctx.lineTo(1* size, 7 * size);
  ctx.lineTo(0* size, 4 * size);
  ctx.closePath();
  ctx.fillStyle = colors[1];
  ctx.fill();

  //Tail tip
  ctx.beginPath();
  ctx.moveTo(-19* size, 10* size);
  ctx.lineTo(-21 * size, 8 * size);
  ctx.lineTo(-23 * size, 11 * size);
  ctx.lineTo(-23 * size, 12 * size);
  ctx.lineTo(-21 * size, 12 * size);
  ctx.lineTo(-19 * size, 10 * size);

  ctx.closePath();
  ctx.fillStyle = colors[0];
  ctx.fill();


  ctx.restore();
}

