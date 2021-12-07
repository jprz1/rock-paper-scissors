function computerPlay() {
    let moves = ["rock", "paper", "scissors"];

    return(moves[(Math.floor(Math.random() * moves.length))])
}

function playRound(player, computerSelection) {
    let playerSelection = player.toLowerCase();

    //both select same 
    if (computerSelection === playerSelection) {
        return `You both selected ${computerSelection}! Please try again.`
    
    } else {
        switch (true) {
            case (computerSelection === "rock" && playerSelection === "scissors") :
                return "You Lose! Rock beats Scissors";
            case (computerSelection === "rock" && playerSelection === "paper"):
                return "You Win! Paper beats Rock";
            case (computerSelection === "paper" && playerSelection === "scissors"):
                return "You Win! Scissors beats Paper";
            case(computerSelection === "paper" && playerSelection === "rock"):
                return "You Lose! Paper beats Rock";
            case(computerSelection === "scissors" && playerSelection === "rock"):
                return "You Win! Rock beats Scissors";
            case(computerSelection === "scissors" && playerSelection === "paper"):
                return "You Lose! Scissors beats Paper";

        } 
    }
}

function game() {
    let selection = window.prompt("Press 'n' to exit. Otherwise input 'Paper', 'Scissors', or 'Rock' to play!")

    while (selection !== 'n') {
        console.log(playRound(selection, computerPlay()));
        selection = window.prompt("Press 'n' to exit. Otherwise input 'Paper', 'Scissors', or 'Rock' to play!")
    }
    console.log("Thank you for playing!")
}