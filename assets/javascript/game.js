var computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// @ts-check
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

window.onload = function () {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);

}

document.onkeyup = function (event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);


    if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);

    }

    else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }

    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);

    }

    var html = "<p>Guess what number I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;

}