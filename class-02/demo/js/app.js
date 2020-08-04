'use strict';

var wantsToPlayAGame = prompt('do you want to play a game?');

console.log('does the user want to play a game? ' + wantsToPlayAGame);

// if (condition is true){
//   do this thing
// } else {
//   do this  other thing
// }

// if(condition is true){
//   do this thing
// }

// if(condition is true){
//   do this thing
// } else if(this other condition is true){
//   do this other thing
// } else if (another condition is ture){
//   do another thing
// }

if(wantsToPlayAGame.toLowerCase() === 'yes' || wantsToPlayAGame === 'sure' ){
  alert('awesome! let\'s play a game');
} else if(wantsToPlayAGame.toLowerCase() === 'no'){
  alert('too bad');
} else {
  alert('please enter yes or no');
}

switch(wantsToPlayAGame.toLowerCase()){
  case 'yes':
    alert('awesome! let\'s play a game');
    break;
  case 'sure':
    alert('great! Let\'s do it!');
    break;
  case 'no':
    alert('too bad');
    break;
  default:
    alert('please enter yes or no');
}