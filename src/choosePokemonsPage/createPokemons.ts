import { Player } from "../playerClass";
import { PokemonFactory } from "../pokemonFactory";
import * as data from "../../assets/poke_data.json";
import { startGameIfReady } from "./startGameIfReady";
import { addChosenPokemon } from "./addChosenPokemon";
import { createPokeballs } from "./createPokeballs";
import { createActivePlayerName } from "./createActivePlayerName";

export const createPokemons = (
  playerOne: Player,
  playerTwo: Player,
  activePlayer: Player
) => {
  const pokeData = data.pokemons;
  const pokemonFactory = new PokemonFactory(pokeData);
  const pokemonImages = Array.from(
    document.querySelectorAll("#pokemonList img")
  ) as [HTMLImageElement];

  pokemonImages.forEach((pokemonImage) =>
    pokemonImage.addEventListener(
      "click",
      (e) => {
        if (activePlayer.pokemons.length === 3) return;
        addChosenPokemon(e, pokemonFactory, activePlayer);
        createPokeballs(playerOne, activePlayer);
        // change player
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
        createActivePlayerName(activePlayer);
        startGameIfReady(playerOne, playerTwo);
      },
      { once: true }
    )
  );
};
