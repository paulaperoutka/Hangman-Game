//Generate a random word
//var getWord = wordList[Math.floor(Math.random() * (wordList.length))];
//Split the word into an array of letters for the game
//var gameWord = Array.from(getWord);

//var guessedLetters = [];
//var remainingGuesses = [];
//var wins = [];

window.onload = function () {

	//Choose words to include
	var wordList = ["piano", "cello", "music", "notes", "song", "score", "tempo", "rhythm", "orchestra", "percussion"];
	//declaring variables
	var wins = 0;
	var remainingGuesses = 8;
	var guessedLetters = [];
	var currentWord = wordList[Math.floor(Math.random() * wordList.length)];
	var letters = Array.from(wordList);
	