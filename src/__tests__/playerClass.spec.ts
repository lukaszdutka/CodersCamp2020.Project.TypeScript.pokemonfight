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
        try {
            playerWithTooLongName();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Too long name');
        }
    });
    
    



});