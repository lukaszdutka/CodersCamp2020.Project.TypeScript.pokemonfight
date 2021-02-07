import { PokemonFactory } from "../pokemonFactory"
import { PokemonType } from "../pokemonClass"
import * as data from "../../assets/poke_data.json"



describe('Test factory for pokemon class', () => {

    it("Should return ", () => {
        // Given data from poke_data JSON
        const pokeData = data.pokemons;
        const charmander = pokeData[1];
        const pikachu = pokeData[6];

        // When
        const factory = new PokemonFactory(pokeData);
        const charmanderObj = factory.getPokemonByName("Charmander");
        const pikachuObj = factory.getPokemonByName("pikachu");


        // Then        
        expect(pikachuObj.name).toBe("Pikachu");
        expect(charmanderObj.name).toBe("Charmander");

        expect(pikachuObj.currentHP).toBe(pikachu.stats.hp);
        expect(charmanderObj.attackPoints).toBe(charmander.stats.attack);

        expect(pikachuObj.moves[0]).toEqual({moveName: pikachu.moves[0].name, moveType: pikachu.moves[0].type as PokemonType});
        expect(charmanderObj.moves[1]).toEqual({moveName: charmander.moves[1].name, moveType: charmander.moves[1].type as PokemonType});
    })
})