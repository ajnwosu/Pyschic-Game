// Varibles
// setup Variable for array to setup for guessed words
var computerChoices = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z' ];




// We start  with wins all equal  to zero
var wins = 0;

// Variable to hold  losses each game

var loss = 0;

// Variable to hold how many guesses

var guessesLeft = 9;

// Variable to hold words already guessed.

var guessedWords = [];

// Variable hold what the user picks by pressing a key.
var userGuess = null;

//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[ Math.floor( Math.random() * computerChoices.length ) ];



  // FUNCTIONS
// ==============================================================================

// Fuction will grab the HTML element and set it equal to the guessesLeft. 
var updateGuessesLeft = function() {
  document.querySelector( '#guessLeft' ).innerHTML = "Guesses left: " + guessesLeft;
};



var updateUserGuess = function() {
  this.userGuess = this.computerChoices[ Math.floor( Math.random() * this.computerChoices.length ) ];
};


// Function will display guesses the user attempted. ( it also separates the letters by commas.) 
var updateWordsGuessed = function() {
  document.querySelector( '#guessed' ).innerHTML = "Letter already guessed: " + guessedWords.join( ', ' );
};



// Function that updates the Wins...
function updateWin() {
  document.querySelector( "#Win" ).innerHTML = "Win: " + wins;
}


// Function that updates the Loss...
function updateLoss() {
  document.querySelector( '#loss' ).innerHTML = "Losses: " + loss;
}


// Function will be called when we reset everything
function reset() {

  guessesLeft = 9;
  guessedWords = [];

  updateUserGuess();
  updateGuessesLeft();
  updateWordsGuessed();
}

// We run these functions to start game
updateUserGuess();
updateGuessesLeft();


// When the user presses a key, it will run the following function...
document.onkeyup = function( event ) {

  guessesLeft--;
  var userGuess = String.fromCharCode( event.keyCode ).toLowerCase();

  guessedWords.push( userGuess );
  updateGuessesLeft();
  updateWordsGuessed();

  if ( guessesLeft > 0 ) {
    if ( userGuess == computerGuess ) {
      wins++;
      updateWin();
      alert( "Wow, I guess you are psychic!" );
      reset();
    }
  } else if ( guessesLeft == 0 ) {
    // Then we will loss and we'll update the html to display the loss 
    loss++;
    updateLoss();
    alert( "Nope! your not psychic..." );
    // Then we'll call the reset. 
    reset();
  }



}