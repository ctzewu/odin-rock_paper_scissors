let humanScore = 0; 
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors"
            break;
    }
}

function getHumanChoice(){
    let choice = prompt("choose rock, paper or scissors");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log(`Tie! You both played ${humanChoice}.`);
        document.getElementById("roundresult").textContent = `Tie! You both played ${humanChoice}.`;
    }
    else if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            console.log(`${humanChoice} beats ${computerChoice}.`);
            document.getElementById("roundresult").textContent = `${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }
        else {
            console.log(`${computerChoice} beats ${humanChoice}.`);
            document.getElementById("roundresult").textContent = `${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log(`${humanChoice} beats ${computerChoice}.`);
            document.getElementById("roundresult").textContent = `${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }
        else {
            console.log(`${computerChoice} beats ${humanChoice}.`);
            document.getElementById("roundresult").textContent = `${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
    }
    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            console.log(`${humanChoice} beats ${computerChoice}.`);
            document.getElementById("roundresult").textContent = `${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }
        else {
            console.log(`${computerChoice} beats ${humanChoice}.`);
            document.getElementById("roundresult").textContent = `${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
    }
    if (humanScore == 5){
        document.getElementById("winner").textContent = "You win!";
    }
    else if (computerScore==5){
        document.getElementById("winner").textContent = "You lose!";
    }
}

function playGame(){
    // const maxround = 5;
    let roundcount = 1
    console.log("Playing RPS")
    while (true){
        console.log(`Round ${roundcount}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`H:C\n${humanScore}:${computerScore}`);
        roundcount++;
    }
}

// playGame();

document.getElementById("rock-button").addEventListener("click", () => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    document.getElementById("score").textContent ="Score: Human " + humanScore + " - " + computerScore + " Computer";
})

document.getElementById("paper-button").addEventListener("click", () => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    document.getElementById("score").textContent ="Score: Human " + humanScore + " - " + computerScore + " Computer";
})

document.getElementById("scissors-button").addEventListener("click", () => {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    document.getElementById("score").textContent ="Score: Human " + humanScore + " - " + computerScore + " Computer";
})