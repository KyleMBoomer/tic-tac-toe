//querySelectors
var cells = document.querySelectorAll('.cell')
var playerSelect = document.getElementById('player-select')
var dropdown = document.querySelector('.player-select-dropdown')
var header = document.querySelector('h3')
var gameboard = document.querySelector('.gameboard')
var playerOneWins = document.querySelector('#player1-wins')
var playerTwoWins = document.querySelector('#player2-wins')

//Variables & Data Model
var currentPlayer;
var humanPlayer = createPlayer('', '')
var computerPlayer = createPlayer('', '')
var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
[1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

//eventListeners
gameboard.addEventListener('click', function (e) {
    if (e.target.classList.contains('cell')) {
        addToken(e.target.id)
    }
    determineWin(humanPlayer)
})

playerSelect.addEventListener('change', () => {
    var selectedPlayer = playerSelect.value
    if (selectedPlayer === 'Fire') {
        humanPlayer = createPlayer('Master Of Fire', '🔥',)
        computerPlayer = createPlayer('Master of Water', ' 🌊 ')
    } else if (selectedPlayer === 'Water') {
        humanPlayer = createPlayer('Master Of Water', ' 🌊 ')
        computerPlayer = createPlayer('Master Of Fire', '🔥',)
    }
    currentPlayer = humanPlayer
    header.innerText = `It's ${currentPlayer.id}'s turn.`
    hide(dropdown)
    show(header)

})
//eventHandlers
function addToken(cellIndex) {
    if (!cells[cellIndex].textContent) {
        cells[cellIndex].textContent = humanPlayer.token
        humanPlayer.guesses.push(+cellIndex)
        toggleTurn()
    }
}

//Functions 
function createPlayer(id, token) {
    return {
        id,
        token,
        wins: 0,
        guesses: []
    }
}

function toggleTurn() {
    if (currentPlayer === humanPlayer) {
        currentPlayer = computerPlayer
        header.innerText = `It's ${currentPlayer.id}'s turn.`
        gameboard.style.pointerEvents = 'none'
        setTimeout(computerMove, 1000)
        show(header)
    } else {
        currentPlayer = humanPlayer
        header.innerText = `It's ${currentPlayer.id}'s turn.`
        gameboard.style.pointerEvents = 'auto'
        show(header)
    }
}

function getAvailableCells() {
    var availableCells = []
    for (var i = 0; i < cells.length; i++) {
        if (!cells[i].textContent) {
            availableCells.push(cells[i])
        }
    }
    return availableCells
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function computerMove() {
    var availableCells = getAvailableCells()
    if (availableCells.length) {
        var randomIndex = getRandomIndex(availableCells)
        var selectedIndex = availableCells[randomIndex]
        cells[selectedIndex.id].textContent = computerPlayer.token
        computerPlayer.guesses.push(+selectedIndex.id)
    }
    determineWin(computerPlayer)
    toggleTurn()
}

function isBoardFull() {
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            return false
        }
    }
    return true
}

function determineWin(player) {
    for (var i = 0; i < winningCombos.length; i++) {
        var winCombo = winningCombos[i]
        var isWinner = true
        for (var j = 0; j < winCombo.length; j++) {
            var cellIndex = winCombo[j]
            if (cells[cellIndex].textContent !== player.token) {
                isWinner = false
                break
            }
        }
        if (isWinner) {
            console.log(`${player.id} is the winner!`)
            return true
            // displayWin(player)
        }
    }
    if (isBoardFull()) {
        header.innerText = 'Game is a draw'
        return true
    }
    return false
}

// function displayWin(player) {
//     console.log('heyo')
//     player.wins++
//     header.innerText = `Congrats! ${player.id} has won!`
//     player.innerText = `${player.wins}`
//     show(header)
//     toggleTurn()
// }

function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}