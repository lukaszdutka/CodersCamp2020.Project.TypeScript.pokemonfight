import { GameHandler } from "../gameHandlerClass";
import { Player } from "../playerClass";
import { PokemonFactory } from "../pokemonFactory";
import { PokemonType } from "../pokemonClass";
import * as data from "../../assets/poke_data.json";

describe("Test Game Handler class", () => {
  const pokeData = data.pokemons;
  const getPlayerOne = (factory: PokemonFactory) => {
    return new Player("Wojtek", [
      factory.getPokemonByName("bulbasaur"),
      factory.getPokemonByName("charmander"),
      factory.getPokemonByName("pikachu"),
    ]);
  };

  const getPlayerTwo = (factory: PokemonFactory) => {
    return new Player("Wojtek", [
      factory.getPokemonByName("bulbasaur"),
      factory.getPokemonByName("charmander"),
      factory.getPokemonByName("pikachu"),
    ]);
  };

  it("GameHandler.isGameFinished should return false if every player has at least one pokemon", () => {
    // Given
    const factory = new PokemonFactory(pokeData);
    const playerOne = getPlayerOne(factory);
    const playerTwo = getPlayerTwo(factory);
    const gameHandler = new GameHandler(playerOne, playerTwo);

    // When
    const isGameFinished = gameHandler.isGameFinished();

    // Then
    expect(isGameFinished).toBe(false);
  });

  it("GameHandler.isGameFinished should return true if all pokemons of one player are dead", () => {
    // Given
    const factory = new PokemonFactory(pokeData);
    const playerOne = getPlayerOne(factory);
    const playerTwo = getPlayerTwo(factory);
    const gameHandler = new GameHandler(playerOne, playerTwo);

    // When
    playerOne.pokemons.forEach((pokemon) => pokemon.subtractHP(pokemon.maxHP));
    const isGameFinished = gameHandler.isGameFinished();

    // Then
    expect(isGameFinished).toBe(true);
  });
  it("GameHandler.isGameFinished should return false if only some pokemons of a player are dead", () => {
    // Given
    const factory = new PokemonFactory(pokeData);
    const playerOne = getPlayerOne(factory);
    const playerTwo = getPlayerTwo(factory);
    const gameHandler = new GameHandler(playerOne, playerTwo);

    // When
    playerTwo.pokemons[1].subtractHP(playerTwo.pokemons[1].maxHP);
    const isGameFinished = gameHandler.isGameFinished();

    // Then
    expect(isGameFinished).toBe(false);
  });
  it("GameHandler.getWinner should return an error if the game is not finished", () => {
    // Given
    const factory = new PokemonFactory(pokeData);
    const playerOne = getPlayerOne(factory);
    const playerTwo = getPlayerTwo(factory);
    const gameHandler = new GameHandler(playerOne, playerTwo);

    // When
    const winner = () => gameHandler.getWinner();

    // Then
    expect(winner).toThrowError(
      "You cannot get the winner. The game is not over."
    );
  });
  it("GameHandler.getWinner should return the winner if the game is finished", () => {
    // Given
    const factory = new PokemonFactory(pokeData);
    const playerOne = getPlayerOne(factory);
    const playerTwo = getPlayerTwo(factory);
    const gameHandler = new GameHandler(playerOne, playerTwo);

    // When
    playerTwo.pokemons.forEach((pokemon) => pokemon.subtractHP(pokemon.maxHP));
    const winner = gameHandler.getWinner();

    // Then
    expect(winner).toStrictEqual(playerOne);
  });
});
