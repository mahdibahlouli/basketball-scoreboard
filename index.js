let homeScore = document.getElementById("homescore");
let guestSore = document.getElementById("guestscore");

let hScore = 0;
let gScore = 0;

function addOneHome() {
  hScore += 1;
  homeScore.textContent = hScore;
}
function addTwoHome() {
  hScore += 2;
  homeScore.textContent = hScore;
}
function addThreeHome() {
  hScore += 3;
  homeScore.textContent = hScore;
}

function addOneGuest() {
  gScore += 1;
  guestSore.textContent = gScore;
}
function addTwoGuest() {
  gScore += 2;
  guestSore.textContent = gScore;
}
function addThreeGuest() {
  gScore += 3;
  guestSore.textContent = gScore;
}
function reset() {
  gScore = 0;
  hScore = 0;

  homeScore.textContent = hScore;
  guestSore.textContent = gScore;
}
