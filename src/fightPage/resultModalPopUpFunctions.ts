import { GameHandler } from "../gameHandlerClass";
import { renderApp } from "../index"

export const showResultModal = (
    screenToDisplay: HTMLDivElement,
    startingPosition: string,
    GameHandler: GameHandler
  ) => {
    const winnerName = GameHandler.getWinner()
    const resultHeader = screenToDisplay.querySelector('.modalHeader')!
    resultHeader.innerHTML = `${winnerName} won!`
    const playAgainButton = screenToDisplay.querySelector(".modalPlayAgainButton") as HTMLDivElement;
    playAgainButton.addEventListener("click", () => {
        setTimeout(renderApp, 2000);
    });
    screenToDisplay.style.display = startingPosition;
  };