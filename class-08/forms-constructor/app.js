'use strict';

// Goal: make it so that I can create new people instanes from a form

// set up an event listener on the form for 'submit'
// run a callback function
  // collect the information about the person
  // run the informtion through a constructor function
    // the constructor function should  push that object instance into an array

var personForm = document.getElementById('form');
var allPeopleArray = [];

// constructor function
function Person(name, story, animal){
  this.name = name;
  this.story = story;
  this.animal = animal;

  allPeopleArray.push(this);
}

function handleSubmit(event){
  event.preventDefault();

  // collect information from the form
  console.log('this is my event.target.animal.value', event.target.animal.value);
  var userName = event.target.username.value;
  var story = event.target.story.value;
  var animal = event.target.animal.value;
  // run that information through the constructor 

  new Person(userName, story, animal);
}

personForm.addEventListener('submit', handleSubmit);