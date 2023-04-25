//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init globar state var
var mode = "rect";

var toggle = document.getElementById("buttonToggle"); 
toggle.addEventListener('click', ()=>{
	toggleMode(); 
});

//var toggleMode = function(e){
var toggleMode = (e) => { //what is e?
    //console.log(e);
    //console.log(mode);
    console.log("toggling...");
    if (mode === "rect") {
        mode = "circ";
        toggle.innerText = "circ"; //changes the text in the button to circ
    }
    else {
        mode = "rect";
        toggle.innerText = "rect"; //changes the text in the button to rect
    }
    console.log(mode);
};

var drawRect = function(e) {
    //console.log(e);
    var mouseX = e.offsetX; //gets X-coor of mouse when event is fired, offsetX is the x coor in relation to the canvas
    var mouseY = e.offsetY; //gets Y-coor of mouse when event is fired
    console.log("mouseclick registered at ", mouseX, mouseY);
    ctx.beginPath(); //starts/allows for new styling
    ctx.fillStyle = "red"; //fill color to red
    ctx.fillRect(mouseX, mouseY, 70, 100); //width and height of rectangle
};

var drawCircle = (e) => {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    var radius = 30;
    console.log("mouseclick registered at ", mouseX, mouseY);
    ctx.beginPath(); //starts/allows for new styling
    ctx.fillStyle = "red"; //sets the fill color to red
    ctx.strokeStyle = "black"; //sets the stroke (border) color to black
    ctx.arc(mouseX, mouseY, radius, 0, 2*Math.PI);
    //ctx.arc() on its own doesn't display anything
    ctx.fill();
    ctx.stroke();
};

var draw = (e) => {
    if (mode==="rect") {
        drawRect(e);
    }
    else {
        drawCircle(e);
    }
};

var wipeCanvas = () => {
    ctx.clearRect(0, 0, c.width, c.height); //clears the entire canvas rectangle
};

var clear = document.getElementById("buttonClear"); 
clear.addEventListener('click', ()=>{
	wipeCanvas();
});

c.addEventListener("click", draw); //passes the mouse event as parameter for the function
