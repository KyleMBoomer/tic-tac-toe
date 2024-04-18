//querySelectors
var cells = document.querySelectorAll('[id^="cell"]')
var playerSelect = document.getElementById('player-select')
//Variables & Data Model
var gameBoard = []
var fireWins = []
var waterWins = []
var currentPlayer =''

//eventListeners
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer.token
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
    hide(player-select)
    hide(h1)
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