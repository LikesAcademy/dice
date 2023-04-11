var player1 = Math.floor(Math.random() * 6) + 1
var player2 = Math.floor(Math.random() * 6) + 1


while (player1 === player2) {
  player2 = Math.floor(Math.random() * 6);
}

if (player1 > player2) {
  document.querySelector('h1').textContent = 'Player 1 Wins!';
  document.querySelector('.flag').setAttribute('src', 'images/flag.png');
} else {
  document.querySelector('h1').textContent = 'Player 2 Wins!';
  document.querySelector('.flag').setAttribute('src', 'images/flag.png');
}

document.querySelector('.img1').setAttribute('src', 'images/dice' + player1 + '.png')
document.querySelector('.img2').setAttribute('src', 'images/dice' + player2 + '.png')