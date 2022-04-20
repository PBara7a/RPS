import playRound from "./playRound.js"
import computerSelectionValue from "./computerSelection.js"
import createScoreBoard from "./createScoreBoard.js"
import { gameData } from "./gameData.js"

createScoreBoard()

const options = document.querySelectorAll('.option')
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    const player = gameData.plays[e.target.alt]
    const computer = computerSelectionValue()
    playRound(player, computer)
  })
})