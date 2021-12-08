function computerPlay() {
    let moves = ["rock", "paper", "scissors"];

    return(moves[(Math.floor(Math.random() * moves.length))])
}

function playRound(player, computerSelection) {
    /*given the player's selection and computer selection returns
    one of the three following int's representing a result
    0: both users selected the same option therefore it's a tie
    1: the human player won
    2: the computer won*/
    let playerSelection = player.toLowerCase();

    //both select same 
    if (computerSelection === playerSelection) {
        return 0;
    
    } else {
        switch (true) {
            case (computerSelection === "rock" && playerSelection === "scissors") :
                return 2;
            case (computerSelection === "rock" && playerSelection === "paper"):
                return 1;
            case (computerSelection === "paper" && playerSelection === "scissors"):
                return 1
            case(computerSelection === "paper" && playerSelection === "rock"):
                return 2;
            case(computerSelection === "scissors" && playerSelection === "rock"):
                return 1;
            case(computerSelection === "scissors" && playerSelection === "paper"):
                return 2;

        } 
    }
}

function processResult(result, computerSelection, playerSelection) {
    const resultElement = document.querySelector(".result");

    
    //get player element and current score
    const comp = document.querySelector("#computer");
    const player = document.querySelector("#player");
    let compScore = parseInt(comp.innerHTML);
    let playerScore = parseInt(player.innerHTML);

    switch (result) {
        case 0:
            resultElement.textContent = `You both selected ${computerSelection}. Try again.`;
            break;
        case 1:
            resultElement.textContent = `${playerSelection} beats ${computerSelection}`;
            playerScore++;
            break;
        case 2:
            resultElement.textContent = `${computerSelection} beats ${playerSelection}`;
            compScore++;
            break;
    }

    comp.textContent = `${compScore}`;
    player.textContent = `${playerScore}`;

    if (playerScore === 5 || compScore === 5) {
        if (playerScore > compScore) {
            resultElement.textContent = "You have won!"
        } else {
            resultElement.textContent = "You have lost!"
        }
        comp.textContent = "0";
        player.textContent = "0";
        resultElement.textContent = "Click a button to play again!";

    }
}

//figure out player selection and process a game
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let playerSel = e.target.innerHTML;
        let computerSel = computerPlay();
        let result = playRound(playerSel, computerSel);
        processResult(result, computerSel, playerSel);

    })
    
})