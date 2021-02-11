import { GameHandler } from "../gameHandlerClass";
import { createFightPage } from "./renderFightPage";
import { Player } from "../playerClass";

export const showResultModal = (
    screenToDisplay: HTMLDivElement,
    startingPosition: string
  ) => {
    screenToDisplay.style.display = startingPosition;
  };
  
export const playAgainModal = (
    screenToDisplay: HTMLDivElement,
    playerOne: Player,
    playerTwo: Player) => {
    const playAgainButton = screenToDisplay.querySelector(".modalPlayAgainButton");
    playAgainButton?.addEventListener("click", () => {
        const app = document.querySelector("#app") as HTMLDivElement;
        const game = new GameHandler(playerOne, playerTwo);
        setTimeout(() => createFightPage(app, game), 2000);
    });
  };