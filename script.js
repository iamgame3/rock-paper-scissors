/*round starts*/
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