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

const gameOptions = ["rock", "paper", "scissors"];
console.log(gameOptions);

/* function for computer choice */
function randomChoice (gameOptions) {
    var randomChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    return(randomChoice);
}

var computerChoice = randomChoice(gameOptions);
console.log(computerChoice);

userChoice = prompt("Rock paper or scissors?");
console.log(userChoice);

let userScore = 0;
let computerScore = 0;

console.log(userScore);
console.log(computerScore);