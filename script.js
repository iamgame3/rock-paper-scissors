/*round starts*/
let round = (a, b) => {
    if (a == "rock" && b == "scissors") {
        console.log("You lose! The computer chose rock!");
    }   else if (a == "scissors" && b == "paper") {
        console.log("You lose! The computer chose scissors!");
    }   else if (a == "paper" && b == "rock") {
        console.log("You lose! The computer chose paper!");
    }   else if (a == "scissors" && b == "rock") {
        console.log("You win! The computer chose scissors!");
    }   else if (a == "rock" && b == "paper") {
        console.log("You win! The computer chose rock!");
    }   else if (a == "paper" && b == "scissors") {
        console.log("You win! The computer chose paper!");
    }   else {
        console.log("It was a tie! Try again!");
    }
}
/*computer makes choice*/
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
/*human makes choice*/
let humanChoice = () => {
    humanInput = prompt("Rock, paper, or scissors?");
    correctedHumanInput = humanInput.toLowerCase();
    if (correctedHumanInput == "rock" || correctedHumanInput == "paper" || correctedHumanInput == "scissors") {
        return (correctedHumanInput);
    } else {
        humanChoice();
}
}
/*it is decided who won*/
/*if rounds has reached 5, final winner is decided, else, game continues*/