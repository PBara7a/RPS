const plays = {
  rock: 0,
  paper: 1,
  scissors: 2,
  0: 'Rock',
  1: 'Paper',
  2: 'Scissors'
}

let playerPoints = 0;
let computerPoints = 0;

const playerScore = document.createElement('p')
playerScore.textContent = playerPoints
document.querySelector('.player').append(playerScore)

const computerScore = document.createElement('p')
computerScore.textContent = computerPoints
document.querySelector('.computer').append(computerScore)

function computerSelectionValue() {
  return Math.floor(Math.random() * 3);
}

function playerSelectionValue() {
  const play = prompt("Rock, Paper or Scissors?").trim().toLowerCase();
  return plays[play];
}

function playRound(playerValue, computerValue) {
  const result = (3 + computerValue - playerValue) % 3;
  switch (result) {
    case 2:
      playerPoints++;
      playerScore.textContent = playerPoints
      window.alert(`You Win! ${plays[playerValue]} beats ${plays[computerValue]}`);
      break;
    case 1:
      computerPoints++
      computerScore.textContent = computerPoints
      window.alert(`You Lose! ${plays[computerValue]} beats ${plays[playerValue]}`);
      break;
    default:
      window.alert(`It is a tie!`);
  }
}

function playGame(numberOfRoundsToWin) {
  do {
    const player1 = playerSelectionValue();
    const computer = computerSelectionValue()
    playRound(player1, computer)
  } while (playerPoints < numberOfRoundsToWin && computerPoints < numberOfRoundsToWin)
  
  playerPoints > computerPoints ? window.alert(`You won!`) : window.alert(`You lost!`);
}

const options = document.querySelectorAll('.option')
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    const player = plays[e.target.alt]
    const computer = computerSelectionValue()
    playRound(player, computer)
  })
})