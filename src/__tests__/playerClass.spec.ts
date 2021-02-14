import { Player } from "../playerClass";
import { PokemonFactory } from "../pokemonFactory";
import * as data from "../../assets/poke_data.json";

describe("Test Player class", () => {
    const pokeData = data.pokemons;
    const factory = new PokemonFactory(pokeData);

    it("Should throw error when player name is longer than 8", () => {
        // Given
        const name = "Elizabeth"
        const player = (name: string) => {
            return new Player(name, [
                factory.getPokemonByName("bulbasaur"),
                factory.getPokemonByName("charmander"),
                factory.getPokemonByName("pikachu"),
            ])
        };
    
        // When
        const playerWithTooLongName = () => player(name)
    
        // Then
        expect(playerWithTooLongName).toThrow("Too long name")
    });

    it("Should throw error when list of pokemons is longer than 3", () => {
        // Given
        const player = () => {
            return new Player("Mark", [
                factory.getPokemonByName("bulbasaur"),
                factory.getPokemonByName("charmander"),
                factory.getPokemonByName("pikachu"),
                factory.getPokemonByName("squirtle")
            ])
        };
    
        // When
        const playerWithTooMuchPokemens = () => player()
    
        // Then
        expect(playerWithTooMuchPokemens).toThrow("Wrong number of pokemons")
    });

    it("Should throw error when player has not mango", () => {
        // Given
        const player = () => {
            return new Player("Mark", [
                factory.getPokemonByName("bulbasaur"),
                factory.getPokemonByName("charmander"),
                factory.getPokemonByName("pikachu")
            ])
        };
    
        // When
        const playerOne = player()
        const useMango = () => playerOne.useMango()
        useMango()
    
        // Then
        expect(useMango).toThrow("You cannot use mango. You use all mangos")
    });
    
    



});