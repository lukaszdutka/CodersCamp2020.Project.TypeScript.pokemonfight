import { GameHandler } from "../gameHandlerClass";
import { createChoosePage } from "../choosePokemonsPage/choosePokemonsPage"
import { Player } from "../playerClass";

export const showResultModal = (
    screenToDisplay: HTMLDivElement,
    startingPosition: string,
    GameHandler: GameHandler
  ) => {
    const winnerName = GameHandler.getWinner()
    const resultHeader = screenToDisplay.querySelector('.modalHeader')!
    resultHeader.innerHTML = `${winnerName} won!`
    screenToDisplay.style.display = startingPosition;
  };
  
export const playAgainModal = (
    screenToDisplay: HTMLDivElement,
    playerOne: Player,
    playerTwo: Player) => {
    const playAgainButton = screenToDisplay.querySelector(".modalPlayAgainButton");
    playAgainButton?.addEventListener("click", () => {
        setTimeout(() => createChoosePage(playerOne, playerTwo), 2000);
    });
  };