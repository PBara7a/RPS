import { gameData } from "./gameData.js"
import { playerScore, computerScore } from "./createScoreBoard.js"

export default function resetGame() {
  gameData.playerPoints = 0
  playerScore.textContent = gameData.playerPoints
  gameData.computerPoints = 0
  computerScore.textContent = gameData.computerPoints
}