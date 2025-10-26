function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let number = getRandomInt(2);
console.log(number);

function getComputerChoice(number){
    if (number=0) return "rock";
    if (number=1) return "paper";
    if (number=2) return "scissors";
}

/**
 * Declare a function that outputs random number.
 * Call this function and set maximum to 2.
 * Write new function outputting "paper" if return value is 0, "scissors" if 1, "rock" if 2.
*/
