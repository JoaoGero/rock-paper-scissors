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

function incrementHuman() {
    humanScore++;
    return (humanScore);
}

function incrementComputer() {
    computerScore++;
    return (computerScore);
}

function score() {
    if (humanScore < 3 && computerScore < 3) {
        return ("Player " +humanScore+ "-" +computerScore+ " Computer")
    }
    else {
        if (humanScore == 3) {
            humanScore = 0;
            computerScore = 0;
            return ("Player Wins!")
        }
        else if (computerScore == 3) {
            humanScore = 0;
            computerScore = 0;
            return ("Computer Wins!")
        }
    }
}

function playGame() {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    if (humanChoice == "rock" && computerChoice == "rock") {
        return console.log("Draw! Rock ties Rock!"), score();
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        return console.log("Lose! Rock loses to Paper!"), incrementComputer(), score();
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        return console.log("Win! Rocks wins to Scissors"), incrementHuman(), score();
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        return console.log("Draw! Paper ties Paper!"), score();
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        return console.log("Lose! Paper loses to Scissors!"), incrementComputer(), score();
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        return console.log("Win! Paper wins to Rock!"), incrementHuman(), score();
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return console.log("Tie! Scissors ties Scissors!"), score();
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        return console.log("Lose! Scissors loses to Rock!"), incrementComputer(), score();
    }
    else {
        return console.log("Win! Scissors wins to Paper!"), incrementHuman(), score();
    }
}
