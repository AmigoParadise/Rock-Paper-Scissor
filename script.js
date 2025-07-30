function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    if (value == 0) {
        return "rock";
    }else if (value == 1) {
        return "paper";
    }else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissor? : ");
    return choice;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("The result is : DRAW!!!");
    }else if (humanChoice === "rock" & computerChoice === "scissor") {
        console.log("The result is : HUMAN WIN!!!");
        return "human";
    }else if (humanChoice === "paper" & computerChoice === "rock") {
        console.log("The result is : HUMAN WIN!!!");
        return "human";
    }else if (humanChoice === "scissor" & computerChoice === "paper") {
        console.log("The result is : HUMAN WIN!!!");
        return "human";
    }else{
        console.log("The result is :COMPUTER WIN!!!");
        return "computer";
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice();
        console.log("Human Chose " + humanSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer Chose " + computerSelection);

        let result = playRound(humanSelection, computerSelection);
        
        if (result === "human") {
            humanScore++;
        }else if (result === "computer") {
            computerScore++;
        }

        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You Win!!")
    }
    else if (humanScore === computerScore) {
        console.log("DRAW!!");
    } else {
        console.log("Computer Win")
    }
}

playGame();