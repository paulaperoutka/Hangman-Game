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

//Set game values and variables

//Choose words to include in the game
var wordList = ["piano", "cello", "music", "notes", "song", "score", "tempo", "rhythm", "orchestra", "percussion"];
//Set wins value at zero
var wins = 0;
//Set total guesses
var guessesRemaining = 8;

var lettersArray = [];

var incorrectGuesses = [];


	//Show starting values
	document.getElementById('startGame').innerHTML = ("Press any letter to begin!");

	document.getElementById('lettersArray').innerHTML = lettersArray;

	document.getElementById('gamesWon').innerHTML = wins; 

	document.getElementById('remainingGuesses').innerHTML = guessesRemaining;

	document.getElementById('guessedLetters').innerHTML = incorrectGuesses;



//Select a random word for the game from the wordList array
var gameWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(gameWord);
//Get array of letters from game word
var lettersArray = Array.from(gameWord);
//console.log(getLetters)

	for (var i = 0; i < gameWord.length; i++) {
    lettersArray[i] = "_ ";
    var hideComma = lettersArray.join("");
			document.getElementById("lettersArray").innerHTML = hideComma;
    console.log(lettersArray[i]);
	}


var remainingLetters = gameWord.length;


//Cannot get actual game to run :()
document.onkeyup = function () {

	var playerGuess = String.fromCharCode(event.keyCode).toUpperCase();
	var correctGuess = [];

	if (event.keyCode > 64 && event.keyCode < 91) {

    	document.getElementById('startGame').innerHTML = ("");
    	document.getElementById('notLetterMessage').innerHTML = ("");
    	console.log(event.key);
    }

    else {
    	document.getElementById('notLetterMessage').innerHTML = ("That's not a letter!");
    }

//Capture playerGuess letetr and replace underscore with playerGuess if correct guess
    if (gameWord.includes(playerGuess)) {
    	for (var j=0; j<gameWord.length; j++) {
    		if (gameWord[j] === playerguess) {
    			lettersArray = playerGuess;
    			remainingLetters--;
    			correctGuess = true;
    		}
    	}
    }
//Uncoded: Discount duplicate letters
 	//document.getElementById('duplicateMessage').innerHTML = ("You already guessed that letter!")
 	//guessesRemaining !-

//Uncoded: if incorrect guess, push to guessedLetters, guessesRemaining--

//Uncoded: Lost
 	//if (incorrectGuesses > 8) {
        //document.getElementById('loseMessage').innerHTML =("You lose. Guess a new letter start the game over again!");}

//Uncoded: Win
 	//if (remainingGuesses === 0) {
 		//document.getElementById('winMessage').innerHTML = ("You win! Guess a new letter to start the game over again!")}

 //Uncoded: reset game
	//putting the reset for set variables and display inside a function gameSet (and then even running gameSet ();) made it not run
			
}



//Close window.onload function here or above? Doesn't work when closed here!
 
 