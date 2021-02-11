import { GameHandler } from "../gameHandlerClass";

export const createActivePlayer = (gameHandler: GameHandler) => {
  const activePlayerArea = document.querySelector(
    "#active-player-info"
  ) as HTMLDivElement;
  activePlayerArea.textContent = `${gameHandler.currentPlayer.name} now is your turn. Get the revenge!`;
  const playerOneUnderlineArea = document.querySelector("#fight-page-player1");
  const playerTwoUnderlineArea = document.querySelector("#fight-page-player2");
  if (gameHandler.currentPlayer === gameHandler.playerOne) {
    playerTwoUnderlineArea?.classList.remove("activePlayer");
    playerOneUnderlineArea?.classList.add("activePlayer");
  } else {
    playerOneUnderlineArea?.classList.remove("activePlayer");
    playerTwoUnderlineArea?.classList.add("activePlayer");
  }
};
