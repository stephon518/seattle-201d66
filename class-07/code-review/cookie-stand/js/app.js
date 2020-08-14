'useStrict';
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE');
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
var allLocations = [];
var parent = document.getElementById('table');
var totalOfAllTotals = 0;
var cookieForm = document.getElementById('cookie-form');
// shoul become a Reusable funtion and or template for opject literal mehtod?
  
  
  // objects of each store
  
function Location(minCustomers, maxCustomers, averageCookieSale, locationName){
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookieSale = averageCookieSale;
  this.location = locationName;
  this.totalCookiesForTheDay = 0;

  // an array of customers each hour
  this.customersEachHour = [];

  // an array of cookies sold each hour
  // this is our money array! 
  // this is the array that we want to print to the sales page
  this.cookiesSoldEachHour = [];

  allLocations.push(this);
}

Location.prototype.calculateCustomersEachHour = function(){
  this.customersEachHour=[];
  // the job of this method is to populate the customersEachHour array
  // use the minCust and the maxCust in a random number function to generate a random number 
  // push that random number to the array
  for(var i=0; i<storeHoursArr.length; i++){
    var customers = getRandomNumber(this.minCustomers, this.maxCustomers);
    this.customersEachHour.push(customers);
  }
}

// function to generate our cookiesSoldEachHour array
Location.prototype.calculateCookiesSoldEachHour = function(){
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  //loop through my customersEachHour array and multiply each value by the average cookie sale
  // push that number into my cookiesSoldEachHour array
  for(var i=0; i<this.customersEachHour.length; i++){
    var cookiesSoldForOneHour = Math.ceil(this.averageCookieSale * this.customersEachHour[i]);
    this.cookiesSoldEachHour.push(cookiesSoldForOneHour);
    this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldForOneHour;
  }
}

// renders the information to the page
Location.prototype.render = function(){
  // get the parent element
  // create a tr
  var tableRow = document.createElement('tr');

  // put store names here

  // loop over cookiesSoldEachHour
  for(var i=0; i<storeHoursArr.length; i++){
    // create a td
    var tableData = document.createElement('td');
    // fill it with content from the cookiesSoldEachHour[i]
    tableData.textContent = this.cookiesSoldEachHour[i];
    // append it to the tr
    tableRow.appendChild(tableData);
  }
  
  // create a td
  var totalDailySales = document.createElement('td');
  // fill it with the totalForTheDay
  totalDailySales.textContent = this.totalCookiesForTheDay;
  // apped it to the tr
  tableRow.appendChild(totalDailySales);

  // append the tr to the parent
  parent.appendChild(tableRow);
}


var seattle = new Location(23, 65, 6.3, 'Seattle');
var tokyo = new Location(3, 24, 1.2, 'Tokyo');
var dubai = new Location(11, 38, 3.7, 'Dubai');
var paris = new Location(20, 38, 2.3, 'Paris');


  // var seattle = {
    // location: 'seattle',
    // minCust: 23,
    // maxCust: 65,
    // avgCookieBuy: 6.3,
    // totalCookiesForTheDay: 0,

    // an array of customers each hour
    // customersEachHour: [],

    // an array of cookies sold each hour
    // this is our money array! 
    // this is the array that we want to print to the sales page
    // cookiesSoldEachHour: [],

    // function to generate my customers each hour
    // calculateCustomersEachHour: function(){
    //   // the job of this method is to populate the customersEachHour array
    //   // use the minCust and the maxCust in a random number function to generate a random number 
    //   // push that random number to the array
    //   for(var i=0; i<storeHoursArr.length; i++){
    //     var customers = getRandomNumber(this.minCust, this.maxCust);
    //     this.customersEachHour.push(customers);
    //   }
    // },

    // // function to generate our cookiesSoldEachHour array
    // calculateCookiesSoldEachHour: function(){
    //   //loop through my customersEachHour array and multiply each value by the average cookie sale
    //   // push that number into my cookiesSoldEachHour array
    //   for(var i=0; i<this.customersEachHour.length; i++){
    //     var cookiesSoldForOneHour = Math.ceil(this.avgCookieBuy * this.customersEachHour[i]);
    //     this.cookiesSoldEachHour.push(cookiesSoldForOneHour);
    //     this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldForOneHour;
    //   }
    // },

    // function that renders our cookiesSoldEachHour to the page
    // render: function(){
    //   // put the name on the page

    //   // grab an id for the store name
    //   var seattleStoreName = document.getElementById('seattle-name');
    //   // fill it with the name of the store
    //   seattleStoreName.textContent = this.location;
    
    //   // put the numbers on the page

    //   // grab an id on the DOM 
    //   var parentElement = document.getElementById('seattle');
    //   // loop over my cookiesSoldEachHour
    //   for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    //     // create an li
    //     var listItem = document.createElement('li');
    //     // fill it with content
    //     listItem.textContent = `${storeHoursArr[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
    //     // append it to the DOM
    //     parentElement.appendChild(listItem);
    //   }

  //     // put the total on the page
      
  //     listItem = document.createElement('li');
  //     listItem.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
  //     parentElement.appendChild(listItem);
  //   }
  // }

  // helper functions

  // I got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function generateHeader(){
  // this is going to create the times on the top: 6am 7am 8am 9am 10am 11am 12pm

  // get the parent table element
  // create a tr
  var tableRow = document.createElement('tr');

  // put in blank cell to hold a space for the store name

  // make a loop over the times
  for(var i=0; i<storeHoursArr.length; i++){
    // create a table header
    var tableHeader = document.createElement('th');
    // fill it with the time
    tableHeader.textContent = storeHoursArr[i];
    // append the th to the tr
    tableRow.appendChild(tableHeader);
  }

  // append the tr to the parent
  parent.appendChild(tableRow);
}

function generateFooter(){
  // create a tr
  var footerRow = document.createElement('tr');

  for(var i=0; i<storeHoursArr.length; i++){
    var hourlyTotals = 0;

    for(var j=0; j<allLocations.length; j++){
      hourlyTotals += allLocations[j].cookiesSoldEachHour[i];

      // calculate my total of all totals
      totalOfAllTotals += allLocations[j].cookiesSoldEachHour[i];
      // console.log('this is my totalOfAlltotals:', totalOfAllTotals);
    }

    // create a td
    var footerData = document.createElement('td');
    // fill it with the hourly Totals
    footerData.textContent = hourlyTotals;
    // append it to the tr
    footerRow.appendChild(footerData);

    // add on our total of all totals!

  }
  // create a td
  footerData = document.createElement('td');
  // fill it with content 
  footerData.textContent = totalOfAllTotals;
  // append it to the tr
  footerRow.appendChild(footerData);

  // append the tr to the parent
  parent.appendChild(footerRow);
}

// loop over my allLocations array (which is full of my objec instances) and call my calculateCustomersEachHour prototype followed by my calculateCookiesSoldEachHour prototype.
function generateContent(){
  for(var i = 0; i<allLocations.length; i++){
    allLocations[i].calculateCustomersEachHour();
    allLocations[i].calculateCookiesSoldEachHour();
    allLocations[i].render();
  }
}

function handleSubmit(){

  // tell the browser to NOT get rid of the data
  event.preventDefault();
  // debugger;

  // create variables for data in the form
    // min customers
  var minCust = parseInt(event.target.mincustomers.value);
    // locations
  var locations = event.target.location.value;
    // max customers
  var maxCust = Number(event.target.maxcustomers.value);
    // average cookie sales
  var avgCookie = Number(event.target.averagecookies.value);


  // new object instance
  new Location(minCust, maxCust, avgCookie, locations);

  // clear the table
  parent.innerHTML = '';
  generateHeader();
  generateContent();
  generateFooter();

}

cookieForm.addEventListener('submit', handleSubmit);

generateHeader();
generateContent();
generateFooter();
