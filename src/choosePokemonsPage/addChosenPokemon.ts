import { Pokemon } from "../pokemonClass";
import { PokemonFactory } from "../pokemonFactory";
import { Player } from "../playerClass";

export const addChosenPokemon = (
  event: Event,
  factory: PokemonFactory,
  activePlayer: Player
) => {
  const clickedPokemon = event.target as HTMLImageElement;
  const pokemonName = clickedPokemon.id;
  const newPokemonObject: Pokemon = factory.getPokemonByName(pokemonName);
  activePlayer.addPokemon(newPokemonObject);
  setTimeout(() => {
    clickedPokemon.setAttribute("id", "disabledImg");
  }, 500);
  clickedPokemon.style.animation = "heartbeat 1s ease-in-out both";
};
