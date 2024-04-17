//querySelectors
var cells = document.querySelectorAll('[id^="cell"]')
var playerSelect = document.getElementById('player-select')
//Variables & Data Model
var gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
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
        currentPlayer = createPlayer('currentPlayer', '🔥', 0)
    } else if (selectedPlayer === 'Water') {
        currentPlayer = createPlayer('currentPlayer', ' 🌊 ', 0) 
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

function declareTurn() {

}