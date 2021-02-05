import { PokemonFactory } from "../pokemonFactory"
import * as data from "../../assets/poke_data.json"



describe('Test factory for pokemon class', () => {

    it("Should return ", () => {
        // Given data from poke_data JSON
        const pokeData = data.pokemons;
        // When
        const factory = new PokemonFactory(pokeData);

        // Then
        console.log(factory);
    })
})