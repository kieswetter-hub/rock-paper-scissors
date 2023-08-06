/* rock paper scissors */

/* function to randomly generate computer choice */
function randomChoice (gameOptions) {
    const randomChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    return(randomChoice);
}

/* function for playing a round */
function playRound(userChoice, computerChoice) {
    if (userChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log(`you lose! ${computerChoice} beats ${userChoice}`);
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log(`you lose! ${computerChoice} beats ${userChoice}`);
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log(`you lose! ${computerChoice} beats ${userChoice}`);
    } else if (userChoice === computerChoice) {    
        console.log("it's a tie");
    } else {
        userScore++;
        console.log(`you win! ${userChoice} beats ${computerChoice}`);
    }
}

/* function for announcing the final score */
function finalScore(userScore, computerScore) {
    if (userScore > computerScore) {
        console.log(`You won! ${userScore} to ${computerScore}`);
    } else {
        console.log(`You lost :( ${computerScore} to ${userScore}`)
    }
}

/* actual game play */

const gameOptions = ["rock", "paper", "scissors"];
console.log(gameOptions);

let userScore = 0;
let computerScore = 0;

do  {
    /* get computer choice */
    const computerChoice = randomChoice(gameOptions);
    console.log(computerChoice);

    /* prompt and get user choice */
    userChoice = prompt("rock, paper, scissors?").toLowerCase();
    while ((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors")) {
        userChoice = prompt(`${userChoice} is not valid. Please pick either rock, paper or scissors`);
    }
    console.log(userChoice);

    /* play a round */
    playRound(userChoice, computerChoice);
    console.log(userScore);
    console.log(computerScore);

} while (userScore < 5 && computerScore < 5);

finalScore(userScore, computerScore);