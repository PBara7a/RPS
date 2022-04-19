const plays = {
  rock: 0,
  paper: 1,
  scissors: 2
}

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function playerSelection() {
  const play = prompt("Rock, Paper or Scissors?").trim().toLowerCase()
  return plays[play]
}