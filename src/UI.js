const roundResult = document.querySelector('h2')
const roundDescription = document.querySelector('h3')

const playerWeapon = document.querySelector('.playerSide .weapon-frame img')
const playerScore = document.querySelector('.player-score')

const computerWeapon = document.querySelector('.computerSide .weapon-frame img')
const computerScore = document.querySelector('.computer-score')

const endGameWindow = document.querySelector('.end-game-window')
const endGameMsg = document.querySelector('.end-game-msg')

export {roundResult, 
  roundDescription, 
  playerWeapon,
  playerScore, 
  computerWeapon,
  computerScore,
  endGameWindow,
  endGameMsg
}