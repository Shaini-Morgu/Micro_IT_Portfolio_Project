const score = { win: 0, lose: 0, tie: 0 };
updateScore();

function playGame(playerMove) {
  const comp = pickComputerMove();
  let res = '';

  if (playerMove === 'Rock') {
    res = (comp === 'Rock') ? 'tie' : (comp === 'Paper') ? 'you lose' : 'you win';
  } else if (playerMove === 'Paper') {
    res = (comp === 'Rock') ? 'you win' : (comp === 'Paper') ? 'tie' : 'you lose';
  } else if (playerMove === 'Scissors') {
    res = (comp === 'Rock') ? 'you lose' : (comp === 'Paper') ? 'you win' : 'tie';
  }

  if (res === 'you win') score.win += 1;
  else if (res === 'you lose') score.lose += 1;
  else score.tie += 1;

  updateScore();

  const imageMap = {
    Rock: 'images/rock.png',
    Paper: 'images/paper.jpg',
    Scissors: 'images/scissors.png'
  };

  const resultBox = document.querySelector('.js-result');
  resultBox.innerHTML = `<strong>${res.toUpperCase()}</strong>`;
  document.querySelector('.js-moves').innerHTML = `
    You <img src="${imageMap[playerMove]}" alt="${playerMove}"> 
    vs 
    Computer <img src="${imageMap[comp]}" alt="${comp}">
  `;

  const gameContainer = document.querySelector('.game-container');
  if (res === 'you win') {
    gameContainer.style.backgroundColor = 'lightgreen';  
  } else if (res === 'you lose') {
    gameContainer.style.backgroundColor = 'lightcoral';  
  } else {
    gameContainer.style.backgroundColor = '#ffff99';  
  }
}

function pickComputerMove() {
  const r = Math.random();
  if (r < 1 / 3) return 'Rock';
  else if (r < 2 / 3) return 'Paper';
  else return 'Scissors';
}

function updateScore() {
  document.querySelector('.js-score').innerHTML =
    `Wins: ${score.win} | Losses: ${score.lose} | Ties: ${score.tie}`;
}

function resetGame() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  updateScore();
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';
  document.querySelector('.game-container').style.backgroundColor = '#fff';
}
