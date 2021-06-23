let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');

//button constants
const buttons = document.querySelectorAll('button');

 //constant for game and round messages
const roundMessage = document.createElement('div');
const gameMessage = document.createElement('div');
gameMessage.textContent = 'Play a game of Rock, Paper Scissors! Click a button to start!';

//score constants to update
const userScore = document.querySelector('#playerScore');
const botScore = document.querySelector('#computerScore');

container.appendChild(roundMessage);

//event listener for each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id));
    })
});

//function to check win conditions
function winCondition() {
    if(playerScore === 5) {
        gameMessage.textContent = 'Player wins the game!';
    }
    else if(computerScore === 5) {
        gameMessage.textContent = 'Computer wins the game!';
    }

}

//function to update scores
function updateScore() {
    userScore.textContent = `${playerScore}`;
    botScore.textContent = `${computerScore}`;
}

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

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    console.log(computerSelection);

    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        roundMessage.textContent = 'Tie!';
        winCondition();
        return;
    }
    if (playerSelection == "SCISSORS" && computerSelection == "PAPER" || 
        playerSelection == "ROCK" && computerSelection == "SCISSORS" || 
        playerSelection == "PAPER" && computerSelection == "ROCK") {
        roundMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        updateScore();
        winCondition();
        return;
    }
    if (playerSelection == "SCISSORS" && computerSelection == "ROCK" ||
        playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        roundMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        updateScore();
        winCondition();
        return;
    }
}