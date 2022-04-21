import { playerWeapon, computerWeapon } from './UI.js'
import { gameData } from './gameData.js'

export default function updateWeapons(playerValue, computerValue) {
  playerWeapon.setAttribute('src', `/img/${gameData.plays[playerValue]}.png`)
  computerWeapon.setAttribute('src', `/img/${gameData.plays[computerValue]}.png`)
}