var zooAnimals= ["panda", "monkey", "gorilla", "hippo", "rhino", 
"gorilla", "giraffe", "snake", "ostrich", "zebra", "elephant", 
"tucan", "penguin", "alligator", "turtle", "donkey", "pelican", 
"parrot", "bear", "mantaray", "lion", "lama", "jaguar", "panther",
"tiger", "kangaroo", "frog", "lemar", "sloth", "boar", "camel", 
"eagle", "headgehog", "meercat", "bison", "seal", "owl", "antalope"]

const maxTries = 10;

var guessedLetters = [];

var currentWord;

var guessingWord = [];

var remainingGuesses = 0;

var finished = false;

var wins = 0;

var guessingWordText = "";

function resetGame() {
    remainingGuesses = maxTries;
}

currentWord = Math.floor(Math.random() * (zooAnimals.length));

guessedLetters = [];
guessingWord = [];

console.log(currentWord)

var wins = document.getElementById("totalWins");


for (var i = 0; i< guessingWord.length; i++) {
    guessingWordText += guessingWord[i];

}


var guessingWordText = document.getElementById("currentWord");
var remainingGuesses = document.getElementById("remainingGuesses");
var guessedLetters = document.getElementById("guessedLetters");


function evaluateGuess(letter) {
    for (var i = 0; i < selectableWords[currentWord].length; i++) {
        if(selectableWords[currentWord][i] == letter) {
            guessedLetters.push(i);
        
    } 
    
        else {

        for (var i = 0; i < position.length; i++){
            guessingWord[position[i]] = letter;
        }

     }
}

};


function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
      document.getElementById("currentWord").innerHTML = "You Win!";
      document.getElementById("remainingGuesses").innerHTML = "Press Any Key To Play Again";
        wins++;
        hasFinished = true;
    }

};


function checkLoss()
{
    if(remainingGuesses <=0) {
       document.getElementById("currentWord").innerHTML = "You Lose!";
        document.getElementById("remainingGuesses").innerHTML = "Press Any Key To Play Again"
        hasFinished = true;
    }

}


function makeGuess(letter) {
    
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
};



document.onkeydown = function(event) {
    hasFinished = false;
    if(hasFinished) {
        resetGame();
        
    } else {

        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toUpperCase());
            checkWin();
            checkLoss();
        }
    }

};