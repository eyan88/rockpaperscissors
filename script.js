function computerPlay() {
    let select = Math.floor(Math.random()*3);
    if (select == 0) {
        return "Rock";
    }
    else if (select == 1) {
        return "Paper";
    }
    else if (select == 2) {
        return "Scissors";
    }
}

function playRound() {
    let computerSelection = computerPlay();
    console.log(computerSelection);
    computerSelection = computerSelection.toUpperCase();

    let playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    if (playerSelection == "SCISSORS" && computerSelection == "PAPER" || 
        playerSelection == "ROCK" && computerSelection == "SCISSORS" || 
        playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "You win!";
    }
    if (playerSelection == "SCISSORS" && computerSelection == "ROCK" ||
        playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return "You lose!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    return;
}

game();
