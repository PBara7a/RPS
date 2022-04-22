import checkWinner from './checkWinner.js'
import { gameState } from './gameState.js'
import {roundResult, roundDescription, playerScore, computerScore} from './UI.js'
import updateWeapons from './updateWeapons.js'

export default function playRound(playerValue, computerValue) {
  updateWeapons(playerValue, computerValue)
  const result = (3 + computerValue - playerValue) % 3
  switch (result) {
    case 2:
      gameState.playerPoints++
      playerScore.innerText = `Player: ${gameState.playerPoints}`
      roundResult.innerText = 'You Win!'
      roundDescription.innerText = `${gameState.plays[playerValue]} beats ${gameState.plays[computerValue]}`
      break
    case 1:
      gameState.computerPoints++
      computerScore.innerText = `Computer: ${gameState.computerPoints}`
      roundResult.innerText = 'You Lost!'
      roundDescription.innerText = `${gameState.plays[computerValue]} beats ${gameState.plays[playerValue]}`
      break
    default:
      roundResult.innerText = "It's a tie!"
      roundDescription.innerText = `${gameState.plays[computerValue]} ties with ${gameState.plays[playerValue]}`
  }
      checkWinner()
}