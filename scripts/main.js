var canvas = document.getElementById("ballin");
var ctx = canvas.getContext("2d");

var canvasHeight = canvas.height;
var canvasWidth = canvas.width;
var ZoneHeight = canvasHeight/5;

var canvasOffset=$("#canvas").offset();
//var offsetX = canvasOffset.left;
//var offsetY = canvasOffset.top;
function drawBack() {
    var slowBy2 = new Zone(ZoneHeight,2),
        slowBy4 = new Zone(ZoneHeight*2,4),
        slowBy8 = new Zone(ZoneHeight*3,8),
        slowBy16 = new Zone(ZoneHeight*4,16);
    
    slowBy2.fill(canvas, ctx,"red");
    slowBy4.fill(canvas, ctx, "yellow");
    slowBy8.fill(canvas, ctx, "green");
    slowBy16.fill(canvas, ctx, "blue");
    
    for (var i = 0; i < canvasHeight; i += canvasHeight/5) {
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(canvasWidth,i);
        ctx.stroke();
    }
}


var eyedropperIsActive=false; 

$("#startDropper").mousedown(function(e){
    eyedropperIsActive=true;
    handleMouseMove(e);
    
});

$("#endDropper").mouseup(function(e) {eyedropperIsActive=false;})

function handleMouseMove(e){

    if(!eyedropperIsActive){return;}
    
    var mouseX=parseInt(e.clientX-offsetX);
    var mouseY=parseInt(e.clientY-offsetY);

    // Put your mousemove stuff here
    var eyedropColor=getPixelColor(mouseX,mouseY);
    $("#results").css("backgroundColor",getPixelColor(mouseX,mouseY));

}

function getPixelColor(x, y) {
    var pxData = ctx.getImageData(x,y,1,1);
    return("rgb("+pxData.data[0]+","+pxData.data[1]+","+pxData.data[2]+")");
}



var ballr = 10;
var ballv = 1;
var balla = 0.005;

var balls = [];

function makeBalls(number) {
    for (var n = 0; n < number; n++) {
        balls[n] = new Circle(canvasWidth/(number+1)*n,n*2,ballr);
    }
}
makeBalls(5);

function clearCanvas() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function update() {
    clearCanvas();
    drawBack();
    
    for (var n = 0; n < balls.length; n++){
        balls[n].fill(ctx,0,ballv);
    
    
    	balls[n].fill(ctx,0,ballv);
    	
    	// Now, lets make the ball move by adding the velocity vectors to its position
    	balls[n].y += ballv;
    	// Ohh! The ball is moving!
    	// Lets add some acceleration
    	ballv += balla;
    	//Perfect! Now, lets make it rebound when it touches the floor
    	if(balls[n].y + balls[n].r > canvasHeight) {
    		// First, reposition the ball on top of the floor and then bounce it!
    		balls[n].y = canvasHeight - balls[n].radius;
    		ballv *= -1;
    		// The bounceFactor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.
    	}
	}
}
setInterval(update,1000/60);