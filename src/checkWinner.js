import resetGame from "./resetGame.js"
import { gameData } from "./gameData.js"

export default function checkWinner() {
  if (gameData.playerPoints == gameData.numberOfRoundsToWin) {
    window.alert(`You won!`)
    resetGame()
  }
  if (gameData.computerPoints == gameData.numberOfRoundsToWin) {
    window.alert(`You lost!`)
    resetGame()
  }
}