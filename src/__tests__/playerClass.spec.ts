import { Player } from "../playerClass";
import { Pokemon } from "../pokemonClass";
import { PokemonFactory } from "../pokemonFactory";
import * as data from "../../assets/poke_data.json";

describe("Test Player class", () => {
    const pokeData = data.pokemons;
    const factory = new PokemonFactory(pokeData);

    const player = (name: string, pokemons: Pokemon[]) => {
        return new Player(name, pokemons)
    };

    it("Should throw error when player name is longer than 8", () => {
        // Given
        const name = "Elizabeth"
        const pokemonList = [
            factory.getPokemonByName("bulbasaur"),
            factory.getPokemonByName("charmander"),
            factory.getPokemonByName("pikachu"),
        ]
    
        // When
        const playerWithTooLongName = () => player(name, pokemonList)
    
        // Then
        expect(playerWithTooLongName).toThrow("Too long name")
    });

    it("Should throw error when list of pokemons is longer than 3", () => {
        // Given
        const name = "Mark"
        const pokemonList = [
            factory.getPokemonByName("bulbasaur"),
            factory.getPokemonByName("charmander"),
            factory.getPokemonByName("pikachu"),
            factory.getPokemonByName("squirtle")
        ]
    
        // When
        const playerWithTooMuchPokemens = () => player(name, pokemonList)
    
        // Then
        expect(playerWithTooMuchPokemens).toThrow("Wrong number of pokemons")
    });

    it("Should throw error when player has not mango", () => {
        // Given
        const name = "Mark"
        const pokemonList = [
            factory.getPokemonByName("bulbasaur"),
            factory.getPokemonByName("charmander"),
            factory.getPokemonByName("pikachu"),
        ]
    
        // When
        const playerOne = player(name, pokemonList)
        const useMango = () => playerOne.useMango()
        useMango()
    
        // Then
        expect(useMango).toThrow("You cannot use mango. You use all mangos")
    });
    
    it("Checks if addPokemon function works", () => {
        // Given
        const name = "Mark"
        const pokemonList = [
            factory.getPokemonByName("bulbasaur"),
            factory.getPokemonByName("charmander")
        ]
    
        // When
        const playerOne = player(name, pokemonList)
        playerOne.addPokemon(factory.getPokemonByName("squirtle"))
        const numberOfPokemons = playerOne.pokemons.length
    
        // Then
        expect(numberOfPokemons).toEqual(3)
    });
});