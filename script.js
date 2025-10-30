function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let throwNumber = getRandomInt(3);

function getComputerChoice(x) {
    if (x === 0) return "rock";
    if (x === 1) return "paper";
    if (x === 2) return "scissors";
}

let computerResult = getComputerChoice(throwNumber);
console.log(computerResult);

/**
 * Declare a function that outputs random number.
 * Call this function and set maximum to 2.
 * Write new function outputting "paper" if return value is 0, "scissors" if 1, "rock" if 2.
*/

function getHumanChoice() {
    let playerResult = prompt("What would you like to throw? Rock, paper, scissors!");
    console.log(playerResult.toLowerCase());
    return playerResult;
}

/**
 * Write a prompt to instruct the player to input a value.
 * Write a function (?) to take the input value.
 * Declare a function that will output "paper" "scissors" or "rock" if a user inputs a valid argument.
 */

let humanScore = 0;
const humanScoreCount = humanScore++;

let computerScore = 0;
const computerScoreCount = computerScore++;

// Assign a variable to log the player's score.
// Assign a variable to log the computer's score.
// Initialize both variables.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") return "You win! Rock beats scissors.";
    if (humanChoice === "rock" && computerChoice === "paper") return "You lose! Paper beats rock.";
    if (humanChoice === "rock" && computerChoice === "rock") return "It's a tie!";
    if (humanChoice === "paper" && computerChoice === "rock") return "You win! Paper beats rock.";
    if (humanChoice === "paper" && computerChoice === "scissors") return "You lose! Scissors beats paper.";
    if (humanChoice === "paper" && computerChoice === "paper") return "It's a tie!";
    if (humanChoice === "scissors" && computerChoice === "paper") return "You win! Scissors beats paper.";
    if (humanChoice === "scissors" && computerChoice === "rock") return "You lose! Rock beats scissors.";
    if (humanChoice === "scissors" && computerChoice === "scissors") return "It's a tie!";
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(throwNumber);

let roundResult = playRound(humanSelection, computerSelection);
console.log(roundResult);

function humanWin(roundResult) {
    if (roundResult.includes("You win!")) return humanScore;
    else return computerScoreCount;
}

function computerWin(roundResult) {
    if (roundResult.includes("You lose!")) return computerScore;
    else return humanScoreCount;
}

let humanPoints = humanWin(roundResult);
console.log(humanPoints);

let computerPoints = computerWin(roundResult);
console.log(computerPoints);

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice.
// Use these two parameters to take the human and computer choices as arguments.
// Make humanChoice parameter case-insensitive.
// playRound function to console.log a string value to indicate round winner.
// Increment the humanScore or computerScore variable based on the round winner.

function playGame(){
    
}

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.