import { playerWeapon, computerWeapon } from './UI.js'
import { gameData } from './gameData.js'

export default function updateWeapons(playerValue, computerValue) {
  const playerImg = gameData.plays[playerValue].toLowerCase()
  const computerImg = gameData.plays[computerValue].toLowerCase()
  playerWeapon.setAttribute('src', `/img/${playerImg}.png`)
  computerWeapon.setAttribute('src', `/img/${computerImg}.png`)
}