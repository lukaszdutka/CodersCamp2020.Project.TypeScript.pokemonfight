import { Player } from "../playerClass";
import { GameHandler } from "../gameHandlerClass";
import { createFightPage } from "./renderFightPage";

export const startBattle = (
  playerOne: Player,
  playerTwo: Player,
  app: HTMLDivElement
) => {
  const game = new GameHandler(playerOne, playerTwo);
  setTimeout(() => createFightPage(app, game), 2000);
};
