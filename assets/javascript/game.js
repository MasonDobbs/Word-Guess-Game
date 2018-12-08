var zooAnimals= ["panda", "monkey", "gorilla", "hippo", "rhino", 
"gorilla", "giraffe", "snake", "ostrich", "zebra", "elephant", 
"tucan", "penguin", "alligator", "turtle", "donkey", "pelican", 
"parrot", "bear", "mantaray", "lion", "lama", "jaguar", "panther",
"tiger", "kangaroo", "frog", "lemar", "sloth", "boar", "camel", 
"eagle", "headgehog", "meercat", "bison", "seal", "owl", "antalope"]

// Computer guessing what animal user has to write
// Displaying the number of letters with _
// Display #guess, letters used, #wins
// Get what Keys the User puts
// Update display if the key is correct by replacing the _
// Update display on how much guesses left
// Update display on what keys have been used
// Make a check win and check lose
// Update display if player won
// Update display of player loses
// Make a "Press Any Key To Play Again"

var computerGuess;

var numberOfGuess = 10;

var numberOfWins = 0;

var lettersGuessed;

var userGuess;




window.onload = function() {

    //Gives computer a random item from zooAnimals Array
    computerGuess = Math.floor(Math.random() * zooAnimals.length);

    

    console.log(zooAnimals[computerGuess]);

    var currentWord = document.getElementById("currentWord");

    var numberOfGuess = document.getElementById("remainingGuess");

    
    //Displays underscore equal to number of letters in word being guessed
    for (i = 0; i < zooAnimals[computerGuess].length; i++) {
        currentWord.innerHTML += " _ ";
        var letters = zooAnimals[computerGuess].charAt(i)
    console.log(letters);
    }
    //Displays letter replacing _ if guessed correctly
        letters.onkeydown = function() {
            letters = zooAnimals[computerGuess]
        }
     

};


