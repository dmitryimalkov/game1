// game logic
function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter player names");
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  // we are checking below if the field was already selected and player clicks on it
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an emty field");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; //players[0]
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  console.log(gameData);

  switchPlayer();
}
function checkForGameOver() {
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[0][1] &&
    gameData[0][1] === gameData[0][2]
  ) {
    return gameData[0][0];
  }
}
