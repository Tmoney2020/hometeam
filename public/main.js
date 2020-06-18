let playerOneScore = 0
let playerTwoScore = 0

function checkWin() {
  const teamOneNameForWin = document.querySelector('.team1 h2')
  const teamTwoNameForWin = document.querySelector('.team2 h2')

  const newHeaderForWinner = document.querySelector('h1')
  if (playerOneScore === 21) {
    newHeaderForWinner.textContent = `The winner is ${teamOneNameForWin.textContent}`
    validateField()
  }
  if (playerTwoScore === 21) {
    newHeaderForWinner.textContent = `The winner is ${teamTwoNameForWin.textContent}`
    validateField()
  }
}

function handleClickAddToPlayerOne(event) {
  const target = document.querySelector('.teamOne')
  if (playerOneScore < 21) {
    playerOneScore++
    target.textContent = `${playerOneScore}`
  }
  checkWin()
}

function handleClickSubtractToPlayerOne(event) {
  const target = document.querySelector('.teamOne')
  if (playerOneScore > 0) {
    playerOneScore--
    target.textContent = `${playerOneScore}`
  }
  checkWin()
}

function handleClickAddToPlayerTwo(event) {
  const target = document.querySelector('.teamTwo')
  if (playerTwoScore < 21) {
    playerTwoScore++
    target.textContent = `${playerTwoScore}`
  }
  checkWin()
}

function handleClickSubtractToPlayerTwo(event) {
  const target = document.querySelector('.teamTwo')
  if (playerTwoScore > 0) {
    playerTwoScore--
    target.textContent = `${playerTwoScore}`
  }
  checkWin()
}

function updateValueTeamOneName(event) {
  const teamOneLog = document.querySelector('.team1 h2')
  teamOneLog.textContent = event.target.value
}

function updateValueTeamTwoName(event) {
  const teamTwoLog = document.querySelector('.team2 h2')
  teamTwoLog.textContent = event.target.value
}

function handleClickReset(event) {
  const playerOneResetScore = (document.querySelector(
    '.teamTwo'
  ).textContent = 0)
  const playerTwoResetScore = (document.querySelector(
    '.teamOne'
  ).textContent = 0)
  const newHeaderForWinner = (document.querySelector('h1').textContent =
    'My score Board')

  const gifOfWinner = document.getElementById('img')
  gifOfWinner.removeAttribute('src')

  const teamOneNameForWin = (document.querySelector('.team1 h2').textContent =
    'Team 1')
  const teamTwoNameForWin = (document.querySelector('.team2 h2').textContent =
    'Team 2')

  playerOneScore = 0
  playerTwoScore = 1
}

function validateField() {
  const docs = document.getElementById('img')
  docs.setAttribute('src', 'https://i.imgur.com/vIf0lAD.gif?1')
  docs.style.display = 'block'
}

const main = () => {
  const teamOneAdd = document.querySelector('.team1 .add')
  teamOneAdd.addEventListener('click', handleClickAddToPlayerOne)

  const teamOneSubtract = document.querySelector('.team1 .subtract')
  teamOneSubtract.addEventListener('click', handleClickSubtractToPlayerOne)

  const teamTwoAdd = document.querySelector('.team2 .add')
  teamTwoAdd.addEventListener('click', handleClickAddToPlayerTwo)

  const teamTwoSubtract = document.querySelector('.team2 .subtract')
  teamTwoSubtract.addEventListener('click', handleClickSubtractToPlayerTwo)

  const teamOneName = document.querySelector('.team1 input')
  teamOneName.addEventListener('input', updateValueTeamOneName)

  const teamTwoName = document.querySelector('.team2 input')
  teamTwoName.addEventListener('input', updateValueTeamTwoName)

  const reset = document.querySelector('.resetButton')
  reset.addEventListener('click', handleClickReset)
}

document.addEventListener('DOMContentLoaded', main)
