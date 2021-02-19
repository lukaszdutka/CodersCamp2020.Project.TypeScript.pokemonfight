import { GameHandler } from "../gameHandlerClass";

export const createActivePlayer = (gameHandler: GameHandler) => {
  const activePlayerArea = document.querySelector(
    "#active-player-info"
  ) as HTMLDivElement;
  activePlayerArea.innerHTML = `<span>${gameHandler.currentPlayer.name}</span> now is your turn. What you gonna do now?`;
  const playerOneUnderlineArea = document.querySelector("#fight-page-player1");
  const playerTwoUnderlineArea = document.querySelector("#fight-page-player2");
  const underlineOne = document.querySelector("#underline1") as HTMLDivElement;
  const underlineTwo = document.querySelector("#underline2") as HTMLDivElement;
  if (gameHandler.currentPlayer === gameHandler.playerOne) {
    playerTwoUnderlineArea?.classList.remove("activePlayer");
    playerOneUnderlineArea?.classList.add("activePlayer");
    underlineTwo.style.animation =
      "scale-out-horizontal 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    underlineOne.style.animation =
      "scale-in-hor-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
  } else {
    playerOneUnderlineArea?.classList.remove("activePlayer");
    playerTwoUnderlineArea?.classList.add("activePlayer");
    underlineOne.style.animation =
      "scale-out-horizontal 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    underlineTwo.style.animation =
      "scale-in-hor-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
  }
};
