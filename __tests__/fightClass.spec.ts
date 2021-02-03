import { Fight } from "../src/fightClass"

const fight = new Fight();

describe('Test fight class', () => {

    it("Should return effectivenes of the attack for a given attack type and pokemon defending type", () => {
        // Given
        const attackTypes: string[] = ["normal", "electric", "fire"]
        const pokemonTypes: string[][] = [["normal"], ["normal", "water"], ["bug", "grass"]]

        // When
        const effectiveness: number[] = [];
        for (let i: number = 0; i < attackTypes.length; i++) {
            effectiveness.push(fight.calculateAttackEffectiveness(attackTypes[i], pokemonTypes[i]))
        }

        // Then
        expect(effectiveness).toEqual([1, 2, 4])
    })
})