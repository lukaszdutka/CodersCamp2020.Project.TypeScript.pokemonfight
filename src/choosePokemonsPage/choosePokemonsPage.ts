import { Player } from "../playerClass";
import { createActivePlayerName } from "./createActivePlayerName";
import { createPlayerNames } from "./createPlayerNames";
import { createPokemons } from "./createPokemons";

export const createChoosePage = (playerOne: Player, playerTwo: Player) => {
  let activePlayer = playerOne;
  createPlayerNames(playerOne, playerTwo);
  createActivePlayerName(activePlayer);
  createPokemons(playerOne, playerTwo, activePlayer);
};
