/* rock paper scissors */
const gameOptions = ["rock", "paper", "scissors"];

/* function to randomly generate computer choice */
function randomChoice (gameOptions) {    
    const randomChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    return(randomChoice);
}

let userScore = 0;
let computerScore = 0;

/* function for playing the game */

function playRound(userChoice) {

    const computerChoice = randomChoice(gameOptions);
    if (userScore === 5) {
        document.querySelector('.finalScore')
        .innerHTML = `You won!`;
        document.getElementById("playAgain").innerHTML = '<button onclick="resetScore()">Play Again?</button>';
    } else if (computerScore === 5){
        document.querySelector('.finalScore')
        .innerHTML = `You lost :(`;
        document.getElementById("playAgain").innerHTML = '<button onclick="resetScore()">Play Again?</button>';
    } else if (userChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        document.querySelector('.roundResult')
        .innerHTML = `you lose! ${computerChoice} beats ${userChoice}`;
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        document.querySelector('.roundResult')
        .innerHTML = `you lose! ${computerChoice} beats ${userChoice}`;
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        document.querySelector('.roundResult')
        .innerHTML = `you lose! ${computerChoice} beats ${userChoice}`;
    } else if (userChoice === computerChoice) {    
        document.querySelector('.roundResult')
        .innerHTML = `it's a tie`;
    } else {
        userScore++;
        document.querySelector('.roundResult')
        .innerHTML = `you win! ${userChoice} beats ${computerChoice}`;
    }

document.querySelector('.runningScore')
        .innerHTML = `${userScore} to ${computerScore}`;
}

function resetScore() {
    location.reload()
}