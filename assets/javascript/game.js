//Generate a random word
//var getWord = wordList[Math.floor(Math.random() * (wordList.length))];
//Split the word into an array of letters for the game
//var gameWord = Array.from(getWord);

//var guessedLetters = [];
//var remainingGuesses = [];
//var wins = [];

window.onload = function () {

//Choose words to include in the game
var wordList = ["piano", "cello", "music", "notes", "song", "score", "tempo", "rhythm", "orchestra", "percussion"];
//Select a random word for the game from the wordList array
var gameWord = wordList[Math.floor(Math.random() * wordList.length)];
//Get array of letters from game word
var getLetters = Array.from(gameWord);
console.log(getLetters)

//Set wins value at zero
var wins = 0;
//Set total guesses
var guessesRemaining = 8;
//Open variable to store letters not in gameword
var incorrectGuesses = [];

//Show starting values
//document.getElementById('displayWord').innerHTML = displayWord;


document.getElementById('gamesWon').innerHTML = wins; 

document.getElementById('remainingGuesses').innerHTML = guessesRemaining;

document.getElementById('guessedLetters').innerHTML = incorrectGuesses;


document.onkeypress = function playGame (event) {
	

var displayWord = [];
		for (var i = 0; i < getLetters.length; i++) {
	 	displayAnswer[i] = "_";
	 	}


div.innerHTML





		var playerGuess




	}

//Close windows.onload function
}




//a keycode=65
//z keycode=90
