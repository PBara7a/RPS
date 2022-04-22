import { gameState } from "./gameState.js"
import { endGameWindow, endGameMsg } from "./UI.js"

export default function checkWinner() {
  if (gameState.playerPoints == gameState.numberOfRoundsToWin) {
    endGameWindow.className += ' end-game-window__show'
  }
  if (gameState.computerPoints == gameState.numberOfRoundsToWin) {
    endGameMsg.innerText = 'You Lost...'
    endGameWindow.className += ' end-game-window__show'
  }
}