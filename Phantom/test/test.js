var ctx = document.getElementById('myCanvas').getContext("2d");
 
var x = y = x2 = 50;
var y2 = 110;

function draw() {
    drawOne();
    drawTwo();
}

function drawOne() {
    ctx.fillStyle =  "#FFB732";
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    x+=4;
    if (x < 250) {
        ctx.fillRect(x,y,50,50);
        var requestID1 = requestAnimationFrame(drawOne); 
        console.log(x);
    }
    else {
        cancelAnimationFrame(requestID1);   
    }
}
function drawTwo() {
    ctx.fillStyle =  "#FF000b";
    ctx.fillRect(x2,y2,50,50);
    x2+=4;
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    if (x < 500) {
        requestID2 = requestAnimationFrame(drawTwo);
    }
}

setInterval(draw, 180);
