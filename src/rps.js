const plays = {
  Rock: 0,
  Paper: 1,
  Scissors: 2
}

function computerPlay() {
  return Math.floor(Math.random() * 3);
}
