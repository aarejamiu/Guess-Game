let trials = 0;
let gameOver = false;

let secretNumber = Math.floor(Math.random() * 6);

startGame();

function startGame() {
    secretNumber = Math.floor(Math.random() * 6);
    trials = 0;
    gameOver = false;
}

restartGame;

function restartGame() {
    startGame();
    getElementById("guessNumber").value = '';
}
function checkGuess() {
    let userGuess = Number(document.getElementById("guessNumber").value.trim());
    trials++;

    if (userGuess === ''){
        alert("Pick a number");
        return
    }

    if (userGuess > 5) {
        alert("Please pick a number between 0 and 5");
        return
    }

    if (userGuess == secretNumber) {
        alert("Congratulations! Your guess is right.");
        gameOver = true;
        restartGame();
    }
    else if (trials === 5) {
        alert("Game Over! The correct number was " + secretNumber + ".");
        gameOver = true;
        restartGame();
    }
    else {
        alert("Sorry, Try again!");
    }
}