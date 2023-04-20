// Team Cereal Killers :: Selena Ho, Wanying Li
//worked with Buffalo x3
// SoftDev pd8
// K29 -- Getting more comfortable with the dev console and the DOM
// 2023-04-20
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("HELLO"); //prints to console

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};

//console.log(f(10))

//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };

//console.log(o.name)
//console.log(o.func(20))
//console.log(o.items[1])
//console.log(o.morestuff.a)

var addItem = function(text) {
  var list = document.getElementById("thelist"); //what is document
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};

//console.log(addItem("Hello")) //prints undefined - no return in function
//addItem doesn't actually change the html

var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

//removeItem(5)
//also doesn't change the html


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

//red() //only visibly changes the elements with empty class

var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//stripe()



//insert your implementations here for...
// FIB
var fib = function(n) {
  if (n < 2) {
      return n;
  }
  return fib(n-1) + fib (n-2);
};

// FAC
var fact = function(n) {
  if (n < 2) {
      return 1;
  }
  return n * fact (n-1);
};
// GCD
var GCD = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return GCD(b, a%b);
};

var dasbut = document.getElementById("a"); 
dasbut.addEventListener('click', ()=>{
	addItem(fib(20));
});
var dasbut = document.getElementById("b"); 
dasbut.addEventListener('click', ()=>{
	addItem(fact(7));
});
var dasbut = document.getElementById("c");
dasbut.addEventListener('click', () => {
    addItem(GCD(10,15));
});
//no predeclared functions in the second argument otherwise will run before button is clicked and not run when button is clicked

//addItem(fib(9) + " should be 34")
//addItem(fact(9) + " should be 362880")
//addItem(GCD(9, 15) + " should be 3")
// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  retVal = param1 + param2;
  return retVal;
};

//arrow replaces the key word function

console.log(myFxn("Hello,", "World"));

//code still runs without semicolons (?)
