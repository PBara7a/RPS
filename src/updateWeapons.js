import { playerWeapon, computerWeapon } from './UI.js'
import { gameState } from './gameState.js'

export default function updateWeapons(playerValue, computerValue) {
  const playerImg = gameState.plays[playerValue].toLowerCase()
  const computerImg = gameState.plays[computerValue].toLowerCase()
  playerWeapon.src = `img/${playerImg}.png`
  computerWeapon.src = `img/${computerImg}.png`
}