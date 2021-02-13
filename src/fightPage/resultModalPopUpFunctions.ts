import { GameHandler } from "../gameHandlerClass";
import { renderApp } from "../index"

export const showResultModal = (
    screenToDisplay: HTMLDivElement,
    startingPosition: string,
    GameHandler: GameHandler
  ) => {
    const winnerName = GameHandler.getWinner()
    const resultHeader = screenToDisplay.querySelector('.modal-header')!
    resultHeader.innerHTML = `${winnerName} won!`
    const playAgainButton = screenToDisplay.querySelector(".modal-playagain-button") as HTMLDivElement;
    playAgainButton.addEventListener("click", document.location.reload);
    screenToDisplay.style.display = startingPosition;
  };
