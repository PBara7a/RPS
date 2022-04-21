import { playerWeapon, computerWeapon } from './UI.js'
import { gameData } from './gameData.js'

export default function updateWeapons(playerValue, computerValue) {
  const playerImg = gameData.plays[playerValue].toLowerCase()
  const computerImg = gameData.plays[computerValue].toLowerCase()
  playerWeapon.src = `RPS/img/${playerImg}.png`
  computerWeapon.src = `RPS/img/${computerImg}.png`
}