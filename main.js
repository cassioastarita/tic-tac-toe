var winner =""
var count = 0
var currentPlayer = "X"

var gridElement = document.querySelector('.grid')
function clickListener(event) {

    var boxClicked = event.target

    if (count % 2 == 0 && boxClicked.textContent == "") {
        currentPlayer = "X"
        boxClicked.textContent = currentPlayer
        count = count + 1
        document.querySelector('#game-status').textContent = "It's 0's turn"

    } else if (count % 2 != 0 && boxClicked.textContent == "") {
        currentPlayer = "O"
        boxClicked.textContent = currentPlayer
        count = count + 1
        document.querySelector('#game-status').textContent = "It's X's turn"
    }

    if (document.querySelector('#box1').textContent == currentPlayer && document.querySelector('#box2').textContent == currentPlayer && document.querySelector('#box3').textContent == currentPlayer) {
        console.log(currentPlayer + " has won!")
        winner = currentPlayer
    } else if (document.querySelector('#box4').textContent == currentPlayer && document.querySelector('#box5').textContent == currentPlayer && document.querySelector('#box6').textContent == currentPlayer) {
        console.log(currentPlayer + " has won!")
        winner = currentPlayer    
    } else if (document.querySelector('#box7').textContent == currentPlayer && document.querySelector('#box8').textContent == currentPlayer && document.querySelector('#box9').textContent == currentPlayer) {
        console.log(currentPlayer + " has won!")
        winner = currentPlayer    
    } else if (document.querySelector('#box1').textContent == currentPlayer && document.querySelector('#box4').textContent == currentPlayer && document.querySelector('#box7').textContent == currentPlayer) {
        console.log(currentPlayer + " has won!")
        winner = currentPlayer    
    } else if (document.querySelector('#box2').textContent == currentPlayer && document.querySelector('#box5').textContent == currentPlayer && document.querySelector('#box8').textContent == currentPlayer) {
        console.log(currentPlayer + " has won!")
        winner = currentPlayer    
    } else if (document.querySelector('#box3').textContent == currentPlayer && document.querySelector('#box6').textContent == currentPlayer && document.querySelector('#box9').textContent == currentPlayer) {
        console.log(currentPlayer + " has won!")
        winner = currentPlayer    
    } else if (document.querySelector('#box1').textContent == currentPlayer && document.querySelector('#box5').textContent == currentPlayer && document.querySelector('#box9').textContent == currentPlayer) {
        console.log(currentPlayer + " has won!")
        winner = currentPlayer    
    } else if (document.querySelector('#box3').textContent == currentPlayer && document.querySelector('#box5').textContent == currentPlayer && document.querySelector('#box7').textContent == currentPlayer) {
        console.log(currentPlayer + " has won!")
        winner = currentPlayer    
    }

    if (count == 9 && winner =="") {
        document.querySelector('#game-status').textContent = "Game ended in a draw!"
    }
    
    if (winner != "") {
        document.querySelector('#game-status').textContent = currentPlayer + " has won!"
        gridElement.removeEventListener('click', clickListener)
    } 
    
}

gridElement.addEventListener('click', clickListener)
document.querySelector('.game-restart').addEventListener('click', restartGame);

function restartGame() {
    gridElement.addEventListener('click',clickListener)
    winner ="";
    count =0;
    currentPlayer = "X";
    document.querySelectorAll('.box').forEach(cell => cell.innerHTML = "");
    document.querySelector('#game-status').textContent = "It's " + currentPlayer + " turn";
}