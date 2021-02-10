import { GameHandler } from "../gameHandlerClass";

export const createActivePlayer = (gameHandler: GameHandler) => {
  const activePlayerArea = document.querySelector(
    "#active-player-info"
  ) as HTMLDivElement;
  activePlayerArea.textContent = `${gameHandler.currentPlayer.name} now is your turn. Get the revenge!`;
};
