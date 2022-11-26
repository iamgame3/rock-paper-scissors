const result = document.querySelector('.result');
const humanScore = document.querySelector('.human-score-value');
const computerScore = document.querySelector('.computer-score-value');
const winner = document.querySelector('.winner');

let round = (a, b) => {
    if (humanScore.textContent == 5 || computerScore.textContent == 5) {
        humanScore.textContent = 0;
        computerScore.textContent = 0;
        winner.textContent = "";
    }
    if (a == "rock" && b == "scissors") {
        result.textContent = "You win! The computer chose scissors!";
        humanScore.textContent = parseInt(humanScore.textContent) + 1;
    }   else if (a == "scissors" && b == "paper") {
        result.textContent = "You win! The computer chose paper!";
        humanScore.textContent = parseInt(humanScore.textContent) + 1;
    }   else if (a == "paper" && b == "rock") {
        result.textContent = "You win! The computer chose rock!";
        humanScore.textContent = parseInt(humanScore.textContent) + 1;
    }   else if (a == "scissors" && b == "rock") {
        result.textContent = "You lose! The computer chose rock!";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }   else if (a == "rock" && b == "paper") {
        result.textContent = "You lose! The computer chose paper!";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }   else if (a == "paper" && b == "scissors") {
        result.textContent = "You lose! The computer chose scissors!";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }   else {
        result.textContent = "It was a tie! Try again!";
    }
    if (humanScore.textContent == 5) winner.textContent = "You rule! You beat the computer!";
    if (computerScore.textContent == 5) winner.textContent = "You suck! The computer beat you!";
}

let computerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 100);
    if (randomChoice <=33) {
        return "rock"
    }  else if (randomChoice <=66) {
        return "paper"
    } else {
        return "scissors"
    }
}

let humanChoice = () => {
    humanInput = prompt("Rock, paper, or scissors?");
    correctedHumanInput = humanInput.toLowerCase();
    if (correctedHumanInput == "rock" || correctedHumanInput == "paper" || correctedHumanInput == "scissors") {
        return (correctedHumanInput);
    } else {
        humanChoice();
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    round("rock", computerChoice());
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    round("paper", computerChoice());
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    round("scissors", computerChoice());
});