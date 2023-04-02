playerScore = 0
computerScore = 0
let computerSelection;
let playerSelection;

/* 
best way to do it


function computerInput(){
    choices = ["Rock", "Paper", "Scissors"]
    random = Math.floor(Math.random()*choices.length)
    return choices[randomIndex]
    
} */

function computerInput() {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "Rock"
    } else if (randomNum === 1) {
        return "Paper"
    } else if (randomNum === 2) {
        return "Scissors"
    } else {
        return "error"
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        return "It's a tie!"

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Player wins!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Computer wins!"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Computer wins!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Player wins!"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Player wins!"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Player wins!"
    } else {
        return "Error, cannot calculate"
    }

}


function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerInput()
        const playerSelection = prompt("Please enter you move")

        const result = playRound(playerSelection, computerSelection)

        console.log(result)

        if (result === "Computer wins!") {
            computerScore++
        } else if (result === "Player wins!") {
            playerScore++
        }

        console.log(`Player score = ${playerScore}`);
        console.log(`Computer score = ${computerScore}`)
    }
}

game();