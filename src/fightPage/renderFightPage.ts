import { GameHandler } from "../gameHandlerClass";
import { createActivePokemon } from "./createActivePokemon";
import { createActivePlayer } from "./createActivePlayer";
import { createHPBars } from "./createHPBars";
import { createFightPagePokeballs } from "./createFightPagePokeballs";

const createPlayerFightNames = (gameHandler: GameHandler) => {
  const playerOneName = document.querySelector(
    "#fight-page-player1-name"
  ) as HTMLHeadingElement;
  const playerTwoName = document.querySelector(
    "#fight-page-player2-name"
  ) as HTMLHeadingElement;
  playerOneName.textContent = gameHandler.playerOne.name;
  playerTwoName.textContent = gameHandler.playerTwo.name;
};

export const createFightPage = (
  appDiv: HTMLDivElement,
  gameHandler: GameHandler
) => {
  const fightPage = document.querySelector(
    "#fight-page-template"
  ) as HTMLTemplateElement;
  const resultsModal = document.querySelector("#gameresult-modal-template");
  appDiv.innerHTML = fightPage.innerHTML;
  appDiv.innerHTML += resultsModal?.innerHTML;
  createPlayerFightNames(gameHandler);
  createActivePlayer(gameHandler);
  createActivePokemon(gameHandler);
  createHPBars(gameHandler.playerOne, gameHandler.playerTwo);
  createFightPagePokeballs(gameHandler);
  gameHandler.generateActionButtons();
};
