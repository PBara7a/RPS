import { gameData } from "./gameData.js"

const playerScore = document.createElement('p')
const computerScore = document.createElement('p')

export default function createScoreBoard() {
  // const playerScore = document.createElement('p')
  playerScore.textContent = gameData.playerPoints
  playerScore.className = 'text-align--center'
  document.querySelector('.player').append(playerScore)

  // const computerScore = document.createElement('p')
  computerScore.textContent = gameData.computerPoints
  computerScore.className = 'text-align--center'
  document.querySelector('.computer').append(computerScore)
}

export {playerScore, computerScore}