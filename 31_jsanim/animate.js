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
    clear(); //clears the screen so the previous circles don't show
    ctx.beginPath(); //starts/allows for new styling
    ctx.strokeStyle = "black"; //sets the stroke (border) color to black
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    //ctx.arc() on its own doesn't display anything
    ctx.fill();
    ctx.stroke();
    //console.log(window.requestAnimationFrame(drawDot));
    window.cancelAnimationFrame(requestId); //need this so that window.requestAnimationFrame(drawDot) doesn't keep getting called when you press the button and the circle speed doens't increase
    //otherwise requests will add up every time button is pressed making the circle drawn more per one screen repaint
    requestId = window.requestAnimationFrame(drawDot); //sets requestId to the new one so that we can use it in window.cancelAnimationFrame in drawDot() and stopIt()
    //console.log(requestId);

    if(radius === c.width/2){
        growing = false;
    }
    if(radius === 0){
        growing = true;
    }

    if (growing) {
        radius++;
    }
    else {
        radius--;
    }
    //console.log(growing);
};

var stopIt = () => {
    console.log("StopIt invoked...");
    //console.log(requestId);
    //var recent = window.requestAnimationFrame(drawDot);
    window.cancelAnimationFrame(requestId);
};

dotButton.addEventListener("click", drawDot)
stopButton.addEventListener("click", stopIt)