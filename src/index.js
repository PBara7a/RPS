import playRound from "./playRound.js"
import computerSelectionValue from "./computerSelection.js"
import resetGame from "./resetGame.js"
import { gameState } from "./gameState.js"

const options = document.querySelectorAll('.option')
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    const player = gameState.plays[e.target.dataset.weapon]
    const computer = computerSelectionValue()
    playRound(player, computer)
  })
})

const restartBtn = document.querySelector('.restart-btn')
restartBtn.addEventListener('click', () => resetGame())