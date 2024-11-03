// Possible choices for Game
const choices = ["rock", "paper", "scissors"];
// Select elements to display the result and scores
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
var ele = document.getElementsByName("choices");
// Initial scores
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

// Function to play Game
function playGame(element){
    // Get a random choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""; // Initial result text
    let playerWon = false; // Track if the player won
    // Check if there is a tie
    if(element.value === computerChoice){
        result = "It's A Tie!";
        tieCount++; // Increase tie score
        tieCountDisplay.textContent = tieCount; // Update tie display
    } else{
        // Determine if the player wins/loses based on their choice
        switch(element.value){
            case "rock":
                playerWon = computerChoice === "scissors"; // Rock beats Scissors
                break;
            case "paper":
                playerWon = computerChoice === "rock"; // Paper beats Rock
                break;
            case "scissors":
                playerWon = computerChoice === "paper"; // Scissors beats Paper
                break;
        }
        // Set the result text based on whether player won/lost
        result = playerWon  ? "You win!" : "You lose!";
    }
    
    // Update the displays for player choice, computer choice, and result
    playerDisplay.textContent = `Player: ${element.value}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    // Reset color classes on result display
    resultDisplay.classList.remove("greenText", "redText");
    // Update scores and apply color based on win/lose
    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;  // Increase player score
            playerScoreDisplay.textContent = playerScore; // Update player score display
            break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            computerScore++; // Increase computer score
            computerScoreDisplay.textContent = computerScore; // Update computer score display
            break;
    }
    // Uncheck radio inputs to reset choices
    for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
}

// Function to reset the game
function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    tieCount = 0;
    // Update score displays
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    tieCountDisplay.textContent = tieCount;
    // Clear result and player/computer choice display
    playerDisplay.textContent = "Player:";
    computerDisplay.textContent = "Computer:";
    resultDisplay.textContent = "";
    // Remove color classes from the result display
    resultDisplay.classList.remove("greenText", "redText");
}

