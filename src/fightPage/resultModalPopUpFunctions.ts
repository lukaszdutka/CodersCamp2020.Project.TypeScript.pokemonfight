import { GameHandler } from "../gameHandlerClass";

export const showResultModal = (GameHandler: GameHandler) => {
  const screenToDisplay = document.querySelector(
    "#gameresult-modal-screen"
  ) as HTMLDivElement;
  const winnerName = GameHandler.getWinner().name;
  const resultHeader = screenToDisplay.querySelector("#modal-header")!;
  resultHeader.textContent = `${winnerName} won!`;
  const playAgainButton = screenToDisplay.querySelector(
    ".modalPlayAgainButton"
  ) as HTMLDivElement;
  playAgainButton.addEventListener("click", () => document.location.reload());
  screenToDisplay.style.display = "flex";
};
