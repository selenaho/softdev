//retrieve node in DOM via ID
var c = document.getElementById("playground");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

ctx.fillStyle = "blue";

var requestId;

var clear = (e) => {
    ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;

var drawDot = () => {
    clear;
    ctx.beginPath(); //starts/allows for new styling
    ctx.strokeStyle = "black"; //sets the stroke (border) color to black
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    //ctx.arc() on its own doesn't display anything
    ctx.fill();
    ctx.stroke();
    //console.log(window.requestAnimationFrame(drawDot));
    window.cancelAnimationFrame(requestId);
    requestId = window.requestAnimationFrame(drawDot);
    console.log(requestId);
    if(radius === c.width/2){
        r
    }
    radius++;
};

var stopIt = () => {
    console.log("StopIt invoked...");
    console.log(requestId);
    //var recent = window.requestAnimationFrame(drawDot);
    window.cancelAnimationFrame(requestId);
};

dotButton.addEventListener("click", drawDot)
stopButton.addEventListener("click", stopIt)