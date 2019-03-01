window.onload = function () {

//Set game values and variables

//Choose words to include in the game
var wordList = ["piano", "cello", "music", "notes", "song", "score", "tempo", "rhythm", "orchestra", "percussion"];
//Set wins value at zero
var wins = 0;
//Set total guesses
var guessesRemaining = 8;
//Open array to hold gameWord letters & correct playerGuess
var lettersArray = [];
//Open array to hold incorrect playerGuess
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

//Variable for remaining correct playerGuess; subtract remaining to calculate win
var remainingLetters = gameWord.length;
    console.log(remainingLetters);

//Start play
document.onkeyup = function playGame () {

	var playerGuess = event.key;
//open array to hold booleans for correctGuess; not necessary?
	var correctGuess = [];

    	if (event.keyCode > 64 && event.keyCode < 91) {
            document.getElementById('startGame').innerHTML = ("");
            document.getElementById('notLetterMessage').innerHTML = ("");
            console.log(event.key);
        }
            

        else {
        	document.getElementById('notLetterMessage').innerHTML = ("That's not a letter!");
        }

    //Capture playerGuess letter and replace underscore with playerGuess if correct guess
        if (gameWord.includes(playerGuess)) {

            new Audio('./assets/audio/yep.mp3').play();
        	
            for (var j=0; j<gameWord.length; j++) {
        		if (gameWord[j] === playerGuess) {
        			lettersArray[j] = playerGuess;
        		} 
        	}
            remainingLetters--;
            correctGuess = true;
            console.log(playerGuess);
            document.getElementById("lettersArray").innerHTML = lettersArray.join(" ");
            console.log(remainingLetters);
        }

//Push incorrect guesses
        else { 

            new Audio('./assets/audio/nope.mp3').play();

            for (var j=0; j<gameWord.length; j++) {
                if (gameWord.indexOf(playerGuess) === -1) {
                    correctGuess = false;
                }    
            }
                
            if (event.keyCode > 64 && event.keyCode < 91 && incorrectGuesses.indexOf(playerGuess) != false) {
                    incorrectGuesses.push(playerGuess);
                        document.getElementById("guessedLetters").innerHTML = incorrectGuesses.join(", ");  
                        console.log(incorrectGuesses);      
                    guessesRemaining--;
                        document.getElementById('remainingGuesses').innerHTML = guessesRemaining;
            }

            // if (incorrectGuesses.indexOf(playerGuess) === true) {
            //     document.getElementById('duplicateMessage').innerHTML = ("You already chose that letter!");
            // }
            // document.getElementById('remainingGuesses').innerHTML = guessesRemaining;
        }
        
//WIN!
        if (remainingLetters <= 0 && lettersArray.includes("_ ") != true) {
            wins++;
            console.log(wins);
            document.getElementById('gamesWon').innerHTML = wins;
            document.getElementById('winMessage').innerHTML = ("You win!!!!!  Press any letter to play again.");
                document.onkeyup = function() {
                    if (event.keyCode > 64 && event.keyCode < 91) {
//Do not want to reload entire window, but calling functions and resetting values icouldn't quite get working
                        window.location.reload ();
                    }
                    
                    else {
                        document.getElementById('notLetterMessage').innerHTML = ("That's not a letter!");
                    }
                }

        }

//LOSE!
        if (guessesRemaining === 0) {
            gameWord = gameWord.toUpperCase();
            document.getElementById('loseMessage').innerHTML = (`You lose.  Press any letter to play again. The correct word was ${gameWord}!`);
            document.onkeyup = function () {
                if (event.keyCode > 64 && event.keyCode < 91) {
//Same thing here with not reloading entire window
                    window.location.reload ();
                }

                else {
                    document.getElementById('notLetterMessage').innerHTML = ("That's not a letter!");
                }
                
            }

        }


//close onkeyupfunction
}


//Close window.onload function
 }
 