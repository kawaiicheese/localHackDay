var canvas = document.getElementById("ballin");
var ctx = canvas.getContext("2d");

var canvasHeight = canvas.height;
var canvasWidth = canvas.width;
var ZoneHeight = canvasHeight/5;

var offX = canvas.offsetLeft;
var offY = canvas.offsetTop;

function drawBack() {
    var slowBy0 = new Zone(0,2),
        slowBy2 = new Zone(ZoneHeight,2),
        slowBy4 = new Zone(ZoneHeight*2,4),
        slowBy8 = new Zone(ZoneHeight*3,8),
        slowBy16 = new Zone(ZoneHeight*4,16);
    
    slowBy0.fill(canvas,ctx, "orange");
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

function handleMouseMove(e){

    var mouseX=parseInt(e.clientX-offX);
    var mouseY=parseInt(e.clientY-offY);

    // Put your mousemove stuff here
    return getPixelColor(mouseX,mouseY);

}

function getPixelColor(x, y) {
    var pxData = ctx.getImageData(x, y, 1, 1);
    return ("(" + pxData.data[0] + "," + pxData.data[1] + "," + pxData.data[2] + ")");
}

var ballr = 10;
var ballv = 0.5;
var balla = 0.005;

var balls = [];

function makeBalls(number) {
    for (var n = 0; n < number+1; n++) {
        balls[n] = new Circle(canvasWidth/(number+1)*n+ballr,0,ballr, ballv);
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
        balls[n].fill(ctx);
    	
    	balls[n].y += balls[n].v;
    	
    	balls[n].v += balla;
    	
    	if(balls[n].y + balls[n].r > canvasHeight) {
    	    
    		balls[n].y = canvasHeight - balls[n].radius;
    		balls[n].v *= -1;
    		
    	}
	}
}



canvas.addEventListener('click',function(e){

    
    if (handleMouseMove(e) === "(0,0,0)") {
        
        balls[0].v = -1
        
        alert(mouseX, canvasWidth)
        
        if(mouseX < canvasWidth/5-ballr) {
            balls[0].v = -1;
        } else if (mouseX < canvasWidth*2/5-ballr){
            balls[1].v = -1;
        } else if (mouseX < canvasWidth*3/5-ballr){
            balls[2].v = -1;
        } else if (mouseX < canvasWidth*4/5-ballr){
            balls[3].v = -1;
        } else if (mouseX < canvasWidth-ballr){
            balls[4].v = -1;
        }
    }
    
});

setInterval(update,1000/60);