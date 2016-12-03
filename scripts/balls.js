function Circle(x, y, r, v) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.v = v;
    
    this.fill = function(ctx) {
        
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        
    };
    
};

function Zone(y,slow) {
    this.y = y;
    
    this.slow = slow;
    
    this.fill = function(canvas,ctx,colour,dy) {
        
        ctx.beginPath();
        ctx.rect(0,this.y,canvas.width,canvas.height/5);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.closePath();
        
    };
};
