var canvas = document.getElementById("ballin");
var ctx = canvas.getContext("2d");

var canvasHeight = canvas.height;
var canvasWidth = canvas.width;
var ZoneHeight = canvasHeight/5


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