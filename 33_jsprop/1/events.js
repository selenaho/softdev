// demo 1
// JS event propagation
//1- Loops through array and when you click on an element it will display
//an alert with the text within the tag.

var tds = document.getElementsByTagName('td');

var clicky = function(e) {
  alert( this.innerHTML );
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}
