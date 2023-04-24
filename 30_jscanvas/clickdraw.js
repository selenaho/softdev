//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init globar state var
var mode = "rect";

var toggle = document.getElementById("buttonToggle"); 
toggle.addEventListener('click', (e)=>{
	toggleMode(e);
});

//var toggleMode = function(e){
var toggleMode = (e) => {
    console.log(e);
    console.log(mode)
    console.log("toggling...");
    if (mode === "rect") {
        mode = "circ"
    }
    else {
        mode = "rect"
    }
    console.log(mode)
}

var drawRect = function(e) {
    console.log(e);
    var mouseX = e.offsetX //gets X-coor of mouse when event is fired
    var mouseY = e.offsetY //gets Y-coor of mouse when event is fired
    console.log("mouseclick registered at ", mouseX, mouseY)
    ctx.fillRect(mouseX, mouseY, 10, 10)
}

c.addEventListener("click", drawRect) //passes the mouse event as parameter for the function
