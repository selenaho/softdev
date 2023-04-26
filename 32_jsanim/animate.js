// Cereal Killers :: Selena Ho, Wanying Li
// SoftDev pd8
// K32 -- JS Bounce
// 2023-04-26w

var c = document.getElementById("playground"); // get canvas
var dotButton = document.getElementById("buttonCircle"); // get dot button
var stopButton = document.getElementById("buttonStop"); // get stop button
var dvdButton = document.getElementById("dvd");

var ctx = c.getContext("2d");
ctx.fillStyle = "cyan";
ctx.strokeStyle = "black";

var requestID;

var clear = (e) => {
    //e.preventDefault(); // prevent draw a dot???
    // console.log("clear invoked...");
    ctx.clearRect(0, 0, c.width, c.height); //clears the entire canvas rectangle
}

var dvdLogoSetup = function() {
    window.cancelAnimationFrame(requestID); 

    var rectWidth = 100;
    var rectHeight = 60;

    var rectX = Math.floor(Math.random() * (c.width - rectWidth));
    var rectY = Math.floor(Math.random(c.height - rectHeight));
    
    var xVel = 4;
    var yVel = 4;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var dvdLogo = function() {
        ctx.clearRect(0, 0, c.width, c.height); 
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
        //console.log(rectX, rectY);
        //console.log(c.height - rectHeight);
        //console.log("....");
        if (rectX < 0 || rectX > c.width - rectWidth) {
            xVel = -xVel;
        }
        if (rectY < 0 || rectY > c.height - rectHeight) {
            yVel = -yVel;
        }
        rectX = rectX + xVel;
        rectY = rectY + yVel;
        requestID = window.requestAnimationFrame(dvdLogo);
    };
    dvdLogo();
}

var radius = 0;
var growing = true;

var drawDot = () => {
    // console.log(requestID); // requestID keeps increasing

    //stops the Animaniac button from speeding up the circle
    window.cancelAnimationFrame(requestID); // the cancellation uses the last requestId
    clear();
    // start drawing circle 
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // console.log(radius); // radius is bounded between [0, 250]

    // if the radius touches the edge of the canvas...stop growing
    if (radius == c.width/2) {
        growing = false;
    }
    // if the radius decreases to 0...start growing + prevent negative radius
    if (radius == 0) {
        growing = true;
    }

    if (growing) {
        radius++;
    } else {
        radius--;
    }

    //pass in the function you want to animate
    // to update the requestID each time drawDot is called
    requestID = window.requestAnimationFrame(drawDot);  // this line can be place anywhere in the function as long as it's after canacelAnimationFrame
};

var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", dvdLogoSetup);