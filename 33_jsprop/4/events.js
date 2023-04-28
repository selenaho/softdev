// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //e.stopPropagation();
  //stops either the bubbling up or the capturing from happening so acts only on the first element
};


//Q: Does the order in which the event listeners are attached matter?
//no the default is bubbling, so the action will occur depending on which elements are the children or parents
//depends on whether there is true or false set as an argument not the order of event listeners attached

//Predict, then test...
//Q: What effect does the boolean arg have in each?
//   (Leave exactly 1 version uncommented to test...)

for (x=0; x < trs.length; x++) {
  //trs[x].addEventListener('click', clicky, true);
  trs[x].addEventListener('click', clicky, false);
}

for (var x=0; x < tds.length; x++) {
  //tds[x].addEventListener('click', clicky, true);
  tds[x].addEventListener('click', clicky, false);
}

//table.addEventListener('click', clicky, true);
table.addEventListener('click', clicky, false);

//predictions
//all true: table, row, cell
//all false: cell, row, table
//only table: table, cell, row
//only row: row, cell, table
//only cell: cell, row, table 