'use strict';

var userName = prompt('Welcome to my \"About Me\" page! What is your name?');
console.log('this is the username: ' +userName);
alert('Aloha ' + userName + '! Mahalo for visiting today!');

var guessGame = prompt(userName + ', would you like to play a guessing game?');
console.log('guessing game' + guessGame);

var finalScore = 0;

if(guessGame.toLowerCase() === 'yes' || guessGame.toLowerCase() === 'y'){
    alert('That\'s great! I am excited to tell you more about myself!');
}   else if(guessGame.toLowerCase() === 'no' || guessGame.toLowerCase() ==='n'){
    alert('That\'s too bad! I really wanted to tell you more about myself.');
}   else {
    alert('Please enter yes/no or y/n)');
}
var homeTown = prompt('Am I originally from Seattle, WA?');
console.log('my home town' + homeTown);

if(homeTown.toLowerCase() === 'yes' || homeTown.toLowerCase() === 'y'){
    alert('That answer is incorrect. I am originally from Honolulu, HI. Let\'s try the next question.');
}   else if(homeTown.toLowerCase() === 'no' || homeTown.toLowerCase() ==='n'){
    finalScore++;
    alert('That\'s correct! I am originally from Honolulu, HI. Let\'s move on to the next question.');
}   else {
    alert('Please enter yes/no or y/n)');
}
var outDoor = prompt('Is the Pacific Northwest great for year round outdoor activities?');
console.log('outdoor activites' + outDoor);

if(outDoor.toLowerCase() === 'yes' || outDoor.toLowerCase() === 'y'){
    finalScore++;
    alert('You are absolutely correct. I love to go camping during the summer and skiing during the winter.');
}   else if(outDoor.toLowerCase() === 'no' || outDoor.toLowerCase() ==='n'){
    alert('Unfortunately that\'s not correct! One of the reasons that I moved to Washington is that I can enjoy going camping during the summer and skiing during the winter.');
}   else {
    alert('Please enter yes/no or y/n)');
}
var collegeDegrees = prompt('Do I have multiple college degrees?');
console.log('my college degrees ' + collegeDegrees);

if(collegeDegrees.toLowerCase() === 'yes' || collegeDegrees.toLowerCase() === 'y'){
    finalScore++;
    alert('I do. I have a Bachelor of Arts Degree in Political Science and a Bachelor of Fine Arts in Dance Theatre. Just one more question to go!');
}   else if(collegeDegrees.toLowerCase() === 'no' || collegeDegrees ==='n'){
    alert('I do. I have a Bachelor of Arts Degree in Political Science and a Bachelor of Fine Arts in Dance Theatre. Just one more question to go!');
}   else {
    alert('Please enter yes/no or y/n)');
}
var codeFellows = prompt('Is a career in Software Development in my future?');
console.log('software development' + codeFellows);

if(codeFellows.toLowerCase() === 'yes' || codeFellows.toLowerCase() === 'y'){
    finalScore++;
    alert('I sure hope so! I am so excited to be pursuing a new career in Software Development here at Code Fellows.');
}   else if(codeFellows.toLowerCase() === 'no' || codeFellows.toLowerCase() ==='n'){
    alert('I am hoping that I do. I am currently attending Code Fellows to pursue a new career in Software Development.');
}   else {
    alert('Please enter yes/no or y/n)');
}

var answer = 2;

for (var i = 0; i < 4; i++){
    var myDogs = prompt('Can you guess how many dogs I have?');
    console.log('the use guessed ' + myDogs);
    if  (Number(myDogs) < answer){
        alert('I have more than that. Please try again.');
    }   else if(parseInt(myDogs) > answer){
        alert('Too many! I wouldn\'t be able to afford them. Please try again.');
    }   else if(parseInt(myDogs) === answer){
        finalScore++;
        alert('You are absolutely correct! I have two dogs named Noa and Nina.');
        break;
    }
    if (i === 3){
        alert('You are out of guesses! I have 2 dogs named Noa and Nina.');
        break;
    }
}

var countries = ['Thailand', 'Japan', 'Taiwan', 'Korea'];

for (var i = 0; i < 6; i++){
    var whatAsia = prompt('Can you guess a country in Asia that I would like to visit?');
    var answeredCorrect = false
    // This loop only checks for correct answers.
    for (var j = 0; j < countries.length; j++){
        if (countries[j].toLowerCase() === whatAsia){
            alert('You are correct! I would like to visit Thailand, Japan, Taiwan or Korea.');
            finalScore++;
            answeredCorrect = true
        }   
    }
    if (answeredCorrect === true){
        break;
    }   else {
        alert('You are incorrect. Please try again.');  
    }   
    if (i === 5){
        alert('You are out of guesses! I would like to visit Thailand, Japan, Taiwan or Korea.');
    }
}

alert(userName + ', mahalo for spending a little time learning more about me, but most of all, I hope you had fun! Your final score was ' + finalScore);