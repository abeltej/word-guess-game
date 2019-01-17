function generateAlphabet() {
    var arr = [];
    for (var i = 97; i <= 122; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}

var userScore = 0;
var computerScore = 0;
var losses = 0;
var guessesLeft = 12;
var alphabet = generateAlphabet();
var $alreadyGuessed = document.getElementById("already-guessed");
console.log($alreadyGuessed);

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var $computerGuess = document.getElementById("computer-guess");

console.log("Computer Guess:", computerGuess);
var alreadyGuessedArr = [];
document.getElementById("guesses-left").innerText = guessesLeft;

document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = event.key.toLowerCase();
    alreadyGuessedArr.push(userGuess);

    if (userGuess === computerGuess) {
        userScore++;
        guessesLeft = 12;
        alreadyGuessedArr = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    } else if (guessesLeft === 0) {
        losses++;
        guessesLeft = 12;
        alreadyGuessedArr = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");
    document.getElementById("guesses-left").innerText = guessesLeft;
    document.getElementById("userScore").innerText = "Wins: " + userScore;
    document.getElementById("losses").innerText = "Losses: " + losses;
};
function userGuess() {
    // If there are still more questions, render the next one.
    if (userGuess <= alreadyGuessedArr[8]) {
        document.querySelector("#").innerHTML = questions[questionIndex].q;
    }
    // If there aren't, render the end game screen.
    else {
        document.querySelector("#question").innerHTML = "Game Over!";
        document.querySelector("#score").innerHTML =
            "Final Score: " + score + " out of " + questions.length;
    }
}








// var pirateWords = ["parley", "treasure", "blackpearl", "empress", "daveyjones", "blackbeard", "jacksparrow", "bootstrapbill", "booty", "eastindiatradingcompany"];

// var wins = 0;





// function generateAlphabet() {
//     var arr = [];
//     for (var i = 97; i <= 122; i++) {
//         arr.push(String.fromCharCode(i));
//     }
//     return arr;
// }

// var alphabet = generateAlphabet();
// var $alreadyGuessed = document.getElementById("already-guessed");
// console.log($alreadyGuessed);

// var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


// console.log("Computer Guess:", computerGuess);
// var alreadyGuessedArr = [];

// document.onkeyup = function (event) {
//     var userGuess = event.key;
//     alreadyGuessedArr.push(userGuess);


//     $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");
// }

