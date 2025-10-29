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
    console.log(playerResult);
}

getHumanChoice();

/**
 * Write a prompt to instruct the player to input a value.
 * Write a function (?) to take the input value.
 * Declare a function that will output "paper" "scissors" or "rock" if a user inputs a valid argument.
 */

let humanScore = 0;

let computerScore = 0;
// Assign a variable to log the player's score.
// Assign a variable to log the computer's score.


function playRound(humanChoice, computerChoice) {
    humanChoice + computerChoice;
  // your code here!
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


function sum(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    console.log(sum)
}

sum(3,2);