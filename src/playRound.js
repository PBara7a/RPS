import checkWinner from './checkWinner.js'
import { gameData } from './gameData.js'
import {roundResult, roundDescription, playerScore, computerScore} from './UI.js'
import updateWeapons from './updateWeapons.js'

export default function playRound(playerValue, computerValue) {
  updateWeapons(playerValue, computerValue)
  const result = (3 + computerValue - playerValue) % 3
  switch (result) {
    case 2:
      gameData.playerPoints++
      playerScore.innerText = `Player: ${gameData.playerPoints}`
      roundResult.innerText = 'You Win!'
      roundDescription.innerText = `${gameData.plays[playerValue]} beats ${gameData.plays[computerValue]}`
      break
    case 1:
      gameData.computerPoints++
      computerScore.innerText = `Computer: ${gameData.computerPoints}`
      roundResult.innerText = 'You Lost!'
      roundDescription.innerText = `${gameData.plays[computerValue]} beats ${gameData.plays[playerValue]}`
      break
    default:
      roundResult.innerText = "It's a tie!"
      roundDescription.innerText = `${gameData.plays[computerValue]} ties with ${gameData.plays[playerValue]}`
  }
      checkWinner()
}