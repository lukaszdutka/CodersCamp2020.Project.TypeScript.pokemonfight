import { Player } from "../playerClass";

export const createPlayerNames = (playerOne: Player, playerTwo: Player) => {
  let playerOneNameAreaText = document.querySelector("#choosePagePlayer1Name")!;
  playerOneNameAreaText.textContent = playerOne.name;
  let playerTwoNameAreaText = document.querySelector("#choosePagePlayer2Name")!;
  playerTwoNameAreaText.textContent = playerTwo.name;
};
