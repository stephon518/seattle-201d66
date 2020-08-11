// we want to render the same table in the HTML but in JS

// get a table element on the DOM by id - parent element
var parentElement = document.getElementById('table');

// constructor for pet
  // name, type, color, age
  // render method
  // create table row
  // loop over the pet data
  // create a table data tag
  // fill it content
  // append it to the table row
var allPets = [];

// var myObj = {
//   key: 'value',
//   key: 'new value',
// }

function Pet(name, type, color, age){
  this.petName = name;
  this.type = type;
  this.color = color;
  this.age = age;

  // push the object instance into my allPets array
  allPets.push(this);
}

Pet.prototype.renderTableList = function(){
  // create a tr
  var tableRow = document.createElement('tr');
  // append it to the table - parent element
  parentElement.appendChild(tableRow);
  
  // create a td
  var tableData = document.createElement('td');
  // fill it with content
  tableData.textContent = this.petName;
  // append to the tr
  tableRow.appendChild(tableData);

  // create a td
  var tableData = document.createElement('td');
  // fill it with content
  tableData.textContent = this.type;
  // append to the tr
  tableRow.appendChild(tableData);
}

new Pet('fluffy', 'cat', 'white', 1);
new Pet('Tom', 'cat', 'orange', 2);
new Pet('Spot', 'dog', 'brown', 6);

function generateHeader(){
  // create a tr
  var tableRow = document.createElement('tr');
  // append that tr to by parent element
  parentElement.appendChild(tableRow);

  // create a th
  var tableHead = document.createElement('th');
  // fill that th with the word "Name"
  tableHead.textContent = "Name";
  // append that to the tr
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  // fill that th with the word "Name"
  tableHead.textContent = "Type";
  // append that to the tr
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  // fill that th with the word "Name"
  tableHead.textContent = "Color";
  // append that to the tr
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  // fill that th with the word "Name"
  tableHead.textContent = "Age";
  // append that to the tr
  tableRow.appendChild(tableHead);
}

generateHeader();
for(var i=0; i<allPets.length; i++){
  allPets[i].renderTableList();
}


