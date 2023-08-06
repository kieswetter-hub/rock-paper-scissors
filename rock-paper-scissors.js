/* rock paper scissors */

/* pseudocode 
create list with text values: rock, paper, or scissors
randomly choose one for computer choice and store as variable computerChoice
prompty user for choice and store as variable userChoice

define values:
rock greater than scissors
paper greater than rock
scissors greater than paper

create variable computerScore
create variable userScore

if computerChoice is greater than userChoice 
    return message you lose
    add one to computerScore
if userChoice is greater than computerChoice 
    return message you win
    add one to userScore

loop game for five rounds

after five rounds 
if computerScore is greater than userScore
    return you lost
if userScore is greater than computerScore
    return you won
*/

/* Code */

/* define variables */
const gameOptions = ["rock", "paper", "scissors"];
console.log(gameOptions);

let userScore = 0;
let computerScore = 0;

/* function for computer choice */
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

/* actual game play */

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

