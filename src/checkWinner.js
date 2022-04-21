import { gameData } from "./gameData.js"
import { endGameWindow, endGameMsg } from "./UI.js"

export default function checkWinner() {
  if (gameData.playerPoints == gameData.numberOfRoundsToWin) {
    endGameWindow.className += ' end-game-window__show'
  }
  if (gameData.computerPoints == gameData.numberOfRoundsToWin) {
    endGameMsg.innerText = 'You Lost...'
    endGameWindow.className += ' end-game-window__show'
  }
}