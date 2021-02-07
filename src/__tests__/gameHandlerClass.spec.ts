import { GameHandler } from "../gameHandlerClass";
import { Player } from "../playerClass";
import { PokemonFactory } from "../pokemonFactory";
import { PokemonType } from "../pokemonClass";
import * as data from "../../assets/poke_data.json";

describe("Test Game Handler class", () => {
  const pokeData = data.pokemons;

  it("GameHandler.isGameFinished should return false if every player has at least one pokemon", () => {
    // Given
    const factory_0 = new PokemonFactory(pokeData);
    const playerOne_0 = new Player("Wojtek", [
      factory_0.getPokemonByName("bulbasaur"),
      factory_0.getPokemonByName("charmander"),
      factory_0.getPokemonByName("pikachu"),
    ]);
    const playerTwo_0 = new Player("Ania", [
      factory_0.getPokemonByName("squirtle"),
      factory_0.getPokemonByName("weedle"),
      factory_0.getPokemonByName("pidgey"),
    ]);

    // When
    const isGameFinished_0 = new GameHandler(
      playerOne_0,
      playerTwo_0
    ).isGameFinished();

    // Then
    expect(isGameFinished_0).toBe(false);
  });

  it("GameHandler.isGameFinished should return true if all pokemons of one player are dead", () => {
    // Given
    const factory_1 = new PokemonFactory(pokeData);
    const playerOne_1 = new Player("Wojtek", [
      factory_1.getPokemonByName("bulbasaur"),
      factory_1.getPokemonByName("charmander"),
      factory_1.getPokemonByName("pikachu"),
    ]);
    playerOne_1.pokemons.forEach((pokemon) =>
      pokemon.subtractHP(pokemon.maxHP)
    );
    const playerTwo_1 = new Player("Ania", [
      factory_1.getPokemonByName("squirtle"),
      factory_1.getPokemonByName("weedle"),
      factory_1.getPokemonByName("pidgey"),
    ]);

    // When
    const isGameFinished_1 = new GameHandler(
      playerOne_1,
      playerTwo_1
    ).isGameFinished();

    // Then
    expect(isGameFinished_1).toBe(true);
  });
  it("GameHandler.isGameFinished should return false if only some pokemons of a player are dead", () => {
    // Given
    const factory_2 = new PokemonFactory(pokeData);
    const playerOne_2 = new Player("Wojtek", [
      factory_2.getPokemonByName("bulbasaur"),
      factory_2.getPokemonByName("charmander"),
      factory_2.getPokemonByName("pikachu"),
    ]);
    const playerTwo_2 = new Player("Ania", [
      factory_2.getPokemonByName("squirtle"),
      factory_2.getPokemonByName("weedle"),
      factory_2.getPokemonByName("pidgey"),
    ]);

    // When
    const isGameFinished_2 = new GameHandler(
      playerOne_2,
      playerTwo_2
    ).isGameFinished();

    // Then
    expect(isGameFinished_2).toBe(false);
  });
  it("GameHandler.getWinner should return an error if the game is not finished", () => {
    // Given
    const factory_3 = new PokemonFactory(pokeData);
    const playerOne_3 = new Player("Wojtek", [
      factory_3.getPokemonByName("bulbasaur"),
      factory_3.getPokemonByName("charmander"),
      factory_3.getPokemonByName("pikachu"),
    ]);
    const playerTwo_3 = new Player("Ania", [
      factory_3.getPokemonByName("squirtle"),
      factory_3.getPokemonByName("weedle"),
      factory_3.getPokemonByName("pidgey"),
    ]);

    // When
    const winner_3 = () =>
      new GameHandler(playerOne_3, playerTwo_3).getWinner();

    // Then
    expect(winner_3).toThrowError(
      "You cannot get the winner. The game is not over."
    );
  });
  it("GameHandler.getWinner should return the winner if the game is finished", () => {
    // Given
    const factory_4 = new PokemonFactory(pokeData);
    const playerOne_4 = new Player("Wojtek", [
      factory_4.getPokemonByName("bulbasaur"),
      factory_4.getPokemonByName("charmander"),
      factory_4.getPokemonByName("pikachu"),
    ]);
    const playerTwo_4 = new Player("Ania", [
      factory_4.getPokemonByName("squirtle"),
      factory_4.getPokemonByName("weedle"),
      factory_4.getPokemonByName("pidgey"),
    ]);
    playerTwo_4.pokemons.forEach((pokemon) =>
      pokemon.subtractHP(pokemon.maxHP)
    );

    // When
    const winner_3 = new GameHandler(playerOne_4, playerTwo_4).getWinner();

    // Then
    expect(winner_3).toBe(playerOne_4);
  });
});
