//Generate a random word
//var getWord = wordList[Math.floor(Math.random() * (wordList.length))];
//Split the word into an array of letters for the game
//var gameWord = Array.from(getWord);

//var guessedLetters = [];
//var remainingGuesses = [];
//var wins = [];

//

//generate a word at random and store it in a variable
//# display the length of the word to the user
//# correct_guesses is less than the length of the word
//# prompt the user to guess a letter
//# if the guess is correct increment correct_guesses by 1
//# if the guess is incorrect increment incorrect_guesses by 1 
//# and draw the next part of the hangman
//# if the incorrect_guesses is greater than 8, tell the user 
//# they lost and exit the program
//# if correct_guesses is equal to the length of the word, tell the user they won

window.onload = function () { }

//Choose words to include in the game
var wordList = ["piano", "cello", "music", "notes", "song", "score", "tempo", "rhythm", "orchestra", "percussion"];
//Set wins value at zero
var wins = 0;
//Set total guesses
var guessesRemaining = 8;
//Open variable to store letters not in gameword
var incorrectGuesses = [];
//Open array for gameWord letters
var lettersArray = [];

var correctGuess = [];



//Select a random word for the game from the wordList array
var gameWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(gameWord);
//Get array of letters from game word
var lettersArray = Array.from(gameWord);
//console.log(getLetters)

	for (var i = 0; i < gameWord.length; i++) {
    lettersArray[i] = "_ ";
    console.log(lettersArray[i]);
	}


//Show starting values
document.getElementById('start-game').innerHTML = ("Press any letter to begin!");

document.getElementById('lettersArray').innerHTML = lettersArray;

	var hideComma = lettersArray.join("");
		document.getElementById("lettersArray").innerHTML = hideComma;

document.getElementById('gamesWon').innerHTML = wins; 

document.getElementById('remainingGuesses').innerHTML = guessesRemaining;

document.getElementById('guessedLetters').innerHTML = incorrectGuesses;


function refreshPage {
	
};


document.onkeyup = function () {

	var playerGuess = String.fromCharCode(event.keyCode).toUpperCase();
	var correctGuess = false;

	if (event.keyCode > 64 && event.keyCode < 91) {
    	document.getElementById('start-game').innerHTML = ("");
    	console.log(event.key);

    	for (var j=0; j < gameWord.length; j++) {
    		if (gameWord[j] === playerGuess) {
    			lettersArray[j] = playerGuess;
    			guessesRemaining --;
    			correctGuess = true;
    		}
    	}

	}
}




//a keycode=65
//z keycode=90
