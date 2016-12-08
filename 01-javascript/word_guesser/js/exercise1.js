// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

var word = 'FOX'.split(''); // ['F', 'O', 'X'];
var guesses = '___'.split(''); // ['_', '_', '_'];

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.

var guessLetter = function (letter) {
  letter = letter.toUpperCase();
  var correctGuess = false; // Flag
  for (var i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      correctGuess = true; // Yay we did it!
      guesses[i] = letter;
    }
  }
  maybeCongratulate(correctGuess);
  checkForWinner();

};

var maybeCongratulate = function (correct) {
  if (correct) {
    console.log('You did it', guesses);
  } else {
    console.log('You done goofed');
  }
};

var checkForWinner = function () {
  // Could also check for underscores remaining in guesses.
  if (word.join('') === guesses.join('')) {
    console.log('You win!');
  }
};
