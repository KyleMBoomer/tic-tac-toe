//querySelectors
var cells = document.querySelectorAll('.cell')
var playerSelect = document.getElementById('player-select')
var dropdown = document.querySelector('.player-select-dropdown')
//Variables & Data Model

var currentPlayer = {
    id:'',
    token: '',
    wins: 0,
    guesses: []
}

var computerPlayer = {
    id: '',
    token: '',
    wins : 0,
    guesses: []
}

//eventListeners
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer.token
//I need to change player turn, display that change in the dom as well, and 
//push the id into the guesses array (push it in as a number) google that
        }
    })
})

playerSelect.addEventListener('change', () => {
    console.log('hello')
    var selectedPlayer = playerSelect.value
    if (selectedPlayer === 'Fire') {
        currentPlayer = createPlayer('masterOfFire', '🔥', 0)
    } else if (selectedPlayer === 'Water') {
        currentPlayer = createPlayer('masterOfWater', ' 🌊 ', 0) 
    }
    hide(dropdown)
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