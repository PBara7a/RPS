import checkWinner from './checkWinner.js'
import { gameData } from './gameData.js'
import { playerScore, computerScore } from './createScoreBoard.js'

export default function playRound(playerValue, computerValue) {
  const result = (3 + computerValue - playerValue) % 3
  switch (result) {
    case 2:
      gameData.playerPoints++
      playerScore.textContent = gameData.playerPoints
      window.alert(`You Win! ${gameData.plays[playerValue]} beats ${gameData.plays[computerValue]}`)
      break
    case 1:
      gameData.computerPoints++
      computerScore.textContent = gameData.computerPoints
      window.alert(`You Lose! ${gameData.plays[computerValue]} beats ${gameData.plays[playerValue]}`)
      break
    default:
      window.alert(`It is a tie!`)
  }
      checkWinner()
}