import { Fight } from "../fightClass"
import { PokemonType } from "../pokemonClass"
import { PokemonFactory } from "../pokemonFactory"
import * as data from "../../assets/poke_data.json"

const fight = new Fight();

describe('Test fight class', () => {

    it("Should return effectivenes of the attack for a given attack type and pokemon defending type", () => {
        // Given
        const attackTypes: PokemonType[] = ["normal", "electric", "fire"]
        const pokemonTypes: PokemonType[][] = [["normal"], ["normal", "water"], ["bug", "grass"]]

        // When
        const effectiveness: number[] = [];
        for (let i: number = 0; i < attackTypes.length; i++) {
            effectiveness.push(fight.calculateAttackEffectiveness(attackTypes[i], pokemonTypes[i]))
        }

        // Then
        expect(effectiveness).toEqual([1, 2, 4])
    })

    it("Should return damage points and reduce pokemon hp points", () => {
        // Given
        const factory = new PokemonFactory(data.pokemons);
        const rattata = factory.getPokemonByName("rattata");
        const abra = factory.getPokemonByName("abra");
        const fight = new Fight();

        // When
        const rattataDamge: number = fight.fight(abra, rattata, abra.moves[5]);

        // Then
        expect(rattata.currentHP).toBe(rattata.maxHP - 10);
        expect(rattataDamge).toBe(10);


        // When
        console.log( rattata.moves[2].moveType, abra.types);
        console.log(fight.calculateAttackEffectiveness(rattata.moves[2].moveType, abra.types));
        const abraDamage: number = fight.fight(rattata, abra, rattata.moves[2]);
        
        // Then
        expect(abra.currentHP).toBe(0);
        expect(abraDamage).toBe(82);

    })
})