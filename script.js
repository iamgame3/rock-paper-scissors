const result = document.querySelector('.result');
const humanScore = document.querySelector('.human-score-value');
const computerScore = document.querySelector('.computer-score-value');

let round = (a, b) => {
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

// let fiveRounds = () => {
//     let humanScoreFinal = 0;
//     let computerScoreFinal = 0;
//     for (let i = 0; i < 5; i++) {
//         a = computerChoice();
//         b = humanChoice();
//         point = round(a, b);
//         if (point == "human win") {
//             humanScoreFinal++;
//         }   else if (point == "comp win") {
//             computerScoreFinal++;
//         }
//     }
//     if (humanScoreFinal > computerScoreFinal) {
//         return "human win";
//     }   else if (computerScoreFinal > humanScoreFinal) {
//         return "comp win";
//     }
// }

let game = () => {
    finalScore = fiveRounds();
    if (finalScore == "comp win") {
        return ("You suck! The computer beat you!");
    }   else if (finalScore == "human win") {
        return ("You rule! You beat the computer!");
    }   else {
        return ("How interesting... It was a tie.");
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

