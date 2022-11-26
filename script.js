let round = (a, b) => {
    if (a == "rock" && b == "scissors") {
        console.log("You lose! The computer chose rock!");
        return "comp win";
    }   else if (a == "scissors" && b == "paper") {
        console.log("You lose! The computer chose scissors!");
        return "comp win"
    }   else if (a == "paper" && b == "rock") {
        console.log("You lose! The computer chose paper!");
        return "comp win";
    }   else if (a == "scissors" && b == "rock") {
        console.log("You win! The computer chose scissors!");
        return "human win";
    }   else if (a == "rock" && b == "paper") {
        console.log("You win! The computer chose rock!");
        return "human win";
    }   else if (a == "paper" && b == "scissors") {
        console.log("You win! The computer chose paper!");
        return "human win";
    }   else {
        console.log("It was a tie! Try again!");
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


