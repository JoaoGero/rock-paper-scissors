function getComputerChoice() {
    const pick = (Math.floor(Math.random()*3));
    if (pick == 0) {
        return "Rock";
    }
    else if (pick == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Rock, Paper or Scissors?");
    return input;
}

let humanScore = 0
let computerScore = 0

function playRound() {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    if (humanChoice == "rock" && computerChoice == "rock") {
        return console.log("Draw! Rock ties Rock!");
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        return console.log("Lose! Rock loses to Paper!");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        return console.log("Win! Rocks wins to Scissors");
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        return console.log("Draw! Paper ties Paper!");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        return console.log("Lose! Paper loses to Scissors!");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        return console.log("Win! Paper wins to Rock!");
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return console.log("Tie! Scissors ties Scissors!");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        return console.log("Lose! Scissors loses to Rock!");
    }
    else {
        return console.log("Win! Scissors wins to Paper!");
    }
}