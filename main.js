//querySelectors
var cells = document.querySelectorAll('.cell')
var playerSelect = document.getElementById('player-select')
var dropdown = document.querySelector('.player-select-dropdown')
var header = document.querySelector('h3')
var gameboard = document.querySelector('.gameboard')
//Variables & Data Model
var currentPlayer;
var humanPlayer = createPlayer('', '')

var computerPlayer = createPlayer('', '')

//eventListeners
gameboard.addEventListener('click', function (e) {
    if (e.target.classList.contains('cell')) {
        addToken(e.target.id)
    }
})

playerSelect.addEventListener('change', () => {
    console.log('hello')
    var selectedPlayer = playerSelect.value
    if (selectedPlayer === 'Fire') {
        humanPlayer = createPlayer('Master Of Fire', '🔥',)
    } else if (selectedPlayer === 'Water') {
        humanPlayer = createPlayer('Master Of Water', ' 🌊 ')
    }
    currentPlayer = humanPlayer
    hide(dropdown)
    toggleTurn()
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
    currentPlayer = currentPlayer === humanPlayer ? computerPlayer : humanPlayer
    header.innerText = `It's ${currentPlayer.id}'s turn`
    show(header)
}


function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}