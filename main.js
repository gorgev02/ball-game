






const player1input = document.querySelector('#player1');
const player2input = document.querySelector('#player2');
const startBtn = document.querySelector('#start');

startBtn.addEventListener('click',function() {

alert('Game should be started')

const Player1Name = player1Input.value;

const Player2Name = player2Input.value;

if(player1Name && player2Name) {
    start();

} else {
    
    alert('Please feel inputs');
}
});