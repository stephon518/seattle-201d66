'useStrict';
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE');
var minArr = [23,3,11,20,2];


// testing array and info

var maxArr = [65,24,38,38,16];
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// shoul become a Reusable funtion and or template for opject literal mehtod?
  
  
  // objects of each store
  
  var seattle = {
    location: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieBuy: 6.3,
    totalCookiesForTheDay: 0,

    // an array of customers each hour
    customersEachHour: [],

    // an array of cookies sold each hour
    // this is our money array! 
    // this is the array that we want to print to the sales page
    cookiesSoldEachHour: [],

    // function to generate my customers each hour
    calculateCustomersEachHour: function(){
      // the job of this method is to populate the customersEachHour array
      // use the minCust and the maxCust in a random number function to generate a random number 
      // push that random number to the array
      for(var i=0; i<storeHoursArr.length; i++){
        var customers = getRandomNumber(this.minCust, this.maxCust);
        this.customersEachHour.push(customers);
      }
    },

    // function to generate our cookiesSoldEachHour array
    calculateCookiesSoldEachHour: function(){
      //loop through my customersEachHour array and multiply each value by the average cookie sale
      // push that number into my cookiesSoldEachHour array
      for(var i=0; i<this.customersEachHour.length; i++){
        var cookiesSoldForOneHour = Math.ceil(this.avgCookieBuy * this.customersEachHour[i]);
        this.cookiesSoldEachHour.push(cookiesSoldForOneHour);
        this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldForOneHour;
      }
    },

    // function that renders our cookiesSoldEachHour to the page
    render: function(){
      // put the name on the page

      // grab an id for the store name
      var seattleStoreName = document.getElementById('seattle-name');
      // fill it with the name of the store
      seattleStoreName.textContent = this.location;
    
      // put the numbers on the page

      // grab an id on the DOM 
      var parentElement = document.getElementById('seattle');
      // loop over my cookiesSoldEachHour
      for(var i=0; i<this.cookiesSoldEachHour.length; i++){
        // create an li
        var listItem = document.createElement('li');
        // fill it with content
        listItem.textContent = `${storeHoursArr[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
        // append it to the DOM
        parentElement.appendChild(listItem);
      }

      // put the total on the page
      
      listItem = document.createElement('li');
      listItem.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
      parentElement.appendChild(listItem);
    }
  }

  // helper functions

  // I got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

seattle.calculateCustomersEachHour();
seattle.calculateCookiesSoldEachHour();
seattle.render();
