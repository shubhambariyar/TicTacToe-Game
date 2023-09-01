document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const board = document.getElementById("board");
    const restartButton = document.getElementById("restart");
    let currentPlayer = "X";
    let gameOver = false;
  
    cells.forEach(cell => cell.addEventListener("click", handleClick));
    restartButton.addEventListener("click", restartGame);
  
    function handleClick() {
      if (gameOver) return;
  
      if (this.textContent === "") {
        this.textContent = currentPlayer;
        if (checkWin()) {
          gameOver = true;
          setTimeout(() => {
            alert(`Player ${currentPlayer} wins!`);
          }, 100);
        } else if (checkDraw()) {
          gameOver = true;
          setTimeout(() => {
            alert("It's a draw!");
          }, 100);
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    }
  
    function checkWin() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      return winPatterns.some(pattern =>
        pattern.every(index => cells[index].textContent === currentPlayer)
      );
    }
  
    function checkDraw() {
      return [...cells].every(cell => cell.textContent !== "");
    }
  
    function restartGame() {
      cells.forEach(cell => (cell.textContent = ""));
      currentPlayer = "X";
      gameOver = false;
    }
  });
  