//querySelectors
var cells = document.querySelectorAll('[id^="cell"]')
var playerSelect = document.getElementById('player-select')
//Variables & Data Model
var gameBoard = ['cell-0', 'cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6', 'cell-7', 'cell-8',  ]
var fireWins = []
var waterWins = []

//eventListeners
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer
            currentPlayer = currentPlayer === '🔥' ? ' 🌊 ' : '🔥'
        }
    })
})

playerSelect.addEventListener('change', () => {
    var selectedPlayer = playerSelect.value
    if (selectedPlayer === 'Fire') {
        currentPlayer = createPlayer('masterOfFire', '🔥', 0)
    } else if (selectedPlayer === 'Water') {
        currentPlayer = createPlayer('masterOfWater', ' 🌊 ', 0) 
    }
})
//eventHandlers

//Functions 
function createPlayer(id, token, wins) {
    return {
        id,
        token,
        wins
    }
}

function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}