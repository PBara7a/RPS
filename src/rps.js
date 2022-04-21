import playRound from "./playRound.js"
import computerSelectionValue from "./computerSelection.js"
import { gameData } from "./gameData.js"

const options = document.querySelectorAll('.option')
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    const player = gameData.plays[e.target.alt]
    const computer = computerSelectionValue()
    playRound(player, computer)
  })
})