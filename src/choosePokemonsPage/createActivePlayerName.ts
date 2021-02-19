import { Player } from "../playerClass";

export const createActivePlayerName = (activePlayer: Player) => {
  let whoChoosesPokemonText = document.querySelector("#whoChoosesParagraph")!;
  activePlayer.pokemons.length === 3
    ? (whoChoosesPokemonText.textContent = "Wait for the game to start...")
    : (whoChoosesPokemonText.textContent = `${activePlayer.name} chooses 1 pokemon`);
};
