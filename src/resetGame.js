import { gameState } from "./gameState.js"

export default function resetGame() {
  gameState.playerPoints = 0
  gameState.computerPoints = 0

  window.location.reload()
}