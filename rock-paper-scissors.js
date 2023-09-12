/* rock paper scissors */
const gameOptions = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

/* function to randomly generate computer choice */
function randomChoice (gameOptions) {    
    const randomChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    return(randomChoice);
}

/* function for playing the game */

function playRound(userChoice) {

    const computerChoice = randomChoice(gameOptions);
    if (userScore === 5) {
        document.querySelector('.roundResult')
        .innerHTML = `You won!`;
        document.getElementById("playAgain").innerHTML = '<button onclick="resetScore()">Play Again</button>';
    } else if (computerScore === 5){
        document.querySelector('.roundResult')
        .innerHTML = `The computer beat you.`;
        document.getElementById("playAgain").innerHTML = '<button onclick="resetScore()">Play Again</button>';
    } else if (userChoice === "rock" && computerChoice === "paper" || 
               userChoice === "paper" && computerChoice === "scissors" || 
               userChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        document.querySelector('.roundResult')
        .innerHTML = `You lost this round, ${computerChoice} beats ${userChoice}.`;
    } else if (userChoice === computerChoice) {    
        document.querySelector('.roundResult')
        .innerHTML = `It's a tie.`;
    } else {
        userScore++;
        document.querySelector('.roundResult')
        .innerHTML = `You won this round, ${userChoice} beats ${computerChoice}.`;
    }

document.querySelector('.runningScore')
        .innerHTML = `You: ${userScore} Computer: ${computerScore}`;
}

/* function to reset the game */

function resetScore() {
    location.reload()
}