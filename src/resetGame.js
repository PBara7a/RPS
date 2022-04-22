import { gameData } from "./gameData.js"

export default function resetGame() {
  gameData.playerPoints = 0
  gameData.computerPoints = 0

  window.location.reload()
}