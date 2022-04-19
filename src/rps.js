const plays = {
  rock: 0,
  paper: 1,
  scissors: 2,
  0: 'Rock',
  1: 'Paper',
  2: 'Scissors'
}

function computerSelectionValue() {
  return Math.floor(Math.random() * 3);
}

function playerSelectionValue() {
  const play = prompt("Rock, Paper or Scissors?").trim().toLowerCase();
  return plays[play];
}

function playRound(playerValue, computerValue) {
  const result = (3 + computerValue - playerValue) % 3;
  switch (result) {
    case 2:
      window.alert(`You Win! ${plays[playerValue]} beats ${plays[computerValue]}`);
      break;
    case 1:
      window.alert(`You Lose! ${plays[computerValue]} beats ${plays[playerValue]}`);
      break;
    default:
      window.alert(`It is a tie!`);
  }
}