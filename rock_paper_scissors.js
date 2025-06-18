let humanScore = 0; 
let computerScore = 0;
playGame()

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
    }
    else if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore = computerScore++;
        }
    }
    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore = computerScore++;
        }
    }
}

function playGame(){
    const maxround = 5;
    let roundcount = 1
    console.log("Playing RPS")
    while (roundcount <= maxround){
        console.log(`Round ${roundcount}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`H:C\n${humanScore}:${computerScore}`);
        roundcount++;
    }
}