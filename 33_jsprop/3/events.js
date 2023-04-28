// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //stopPropogation stops the function from being called multiple times or 
  //only displays the first alert?
  //prevents bubbling up from happening! - does the smallest element and then doesn't move onto the parent elements
  e.stopPropagation();
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
//   (Leave exactly 1 version uncommented to test...)

//table.addEventListener('click', clicky, true);
table.addEventListener('click', clicky, false);

// Q: When user clicks on a cell, in what order will the pop-ups appear?
//If only table is true the order is: Table, cell then row
//When the boolean is true. The alert is displayed first.
//If tr and table are both true the order is table, row, cell
//If multiple are true, it sets the outermost tag to have priority when displayed