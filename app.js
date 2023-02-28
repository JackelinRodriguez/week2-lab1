
let home = 0;
let away = 0;




function resetButton() {
  console.log('reset button connected');
  home = ""
  away = ""
  displayHomeScore()
  displayAwayScore()
}


function displayHomeScore() {
  let homeScore = document.getElementById('home-score-box')
  homeScore.innerText = home
}

function displayAwayScore() {
  let awayScore = document.getElementById('away-score-box')
  awayScore.innerText = away
}


function increaseOneHome() {
  console.log('increase one home');
  home += 1
  displayHomeScore()
}

function increaseOneAway() {
  console.log('increase one away');
  away += 1
  displayAwayScore()
}

function increaseThreeHome() {
  console.log('increase three home');
  home += 3
  displayHomeScore()
}

function increaseThreeAway() {
  console.log('increase three away');
  away += 3
  displayAwayScore()
}

