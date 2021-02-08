import { Pokemon } from "../pokemonClass";
import { PokemonFactory } from "../pokemonFactory";
import { Player } from "../playerClass";

export const addChosenPokemon = (
  event: Event,
  factory: PokemonFactory,
  activePlayer: Player
) => {
  const pokemonName = (event.target as HTMLImageElement).id;
  const newPokemonObject: Pokemon = factory.getPokemonByName(pokemonName);
  activePlayer.addPokemon(newPokemonObject);
  (event.target as HTMLImageElement).style.cursor = "default";
  (event.target as HTMLImageElement).style.filter = "grayscale(100%)";
};
