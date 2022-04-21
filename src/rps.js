import playRound from "./playRound.js"
import computerSelectionValue from "./computerSelection.js"
import resetGame from "./resetGame.js"
import { gameData } from "./gameData.js"

const options = document.querySelectorAll('.option')
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    console.log(e)
    let player
    if (e.target.alt) {
      player = gameData.plays[e.target.alt]
    } else {
      player = gameData.plays[e.srcElement.childNodes[1].alt]
    }
    // player = gameData.plays[e.target.alt]  || gameData.plays[e.srcElement.childNodes[1].alt]
    const computer = computerSelectionValue()
    playRound(player, computer)
  })
})

const restartBtn = document.querySelector('.restart-btn')
restartBtn.addEventListener('click', () => resetGame())