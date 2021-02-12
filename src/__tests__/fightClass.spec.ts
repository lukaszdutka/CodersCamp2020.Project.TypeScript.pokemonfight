import { Fight } from "../fightClass"
import { Pokemon, PokemonMove, PokemonType } from "../pokemonClass"


describe('Test fight class', () => {
    const fight = new Fight();
    type TestEffectivenessTuple = [PokemonType, PokemonType[], number];

    it.each<TestEffectivenessTuple>([["normal", ["normal"], 1], ["electric", ["normal", "water"], 2], ["fire", ["bug", "grass"], 4]])

        ("Should return effectivenes of the attack for a given attack type and pokemon defending type",
            (attackType: PokemonType, defenceTypes: PokemonType[], expectedEffectiveness: number) => {

                expect(fight.calculateAttackEffectiveness(attackType, defenceTypes)).toBe(expectedEffectiveness)
            })

    type TestFactoryTuple = [Pokemon, Pokemon, PokemonMove, number, number]

    const pokemonNormal1 = new Pokemon("PokemonNormal", "poke1.jpg", 100, 30, 20, ["normal"], [{ moveName: "attackNormal", moveType: "normal" }])
    const pokemonNormal2 = new Pokemon("PokemonNormal", "poke1.jpg", 100, 30, 20, ["normal"], [{ moveName: "attackNormal", moveType: "normal" }])
    const pokemonGrass = new Pokemon("PokemonGrass", "poke2.jpg", 100, 30, 10, ["grass"], [{ moveName: "attackGrass", moveType: "grass" }])
    const pokemonFire = new Pokemon("PokemonFire", "poke3.jpg", 100, 30, 10, ["fire"], [{ moveName: "attackFire", moveType: "fire" }])

    const damage = (poke1: Pokemon, poke2: Pokemon, effect: number): number => Math.max(poke1.attackPoints - poke2.defensePoints, 5) * effect;

    it.each<TestFactoryTuple>([
        [pokemonNormal1, pokemonNormal2, pokemonNormal1.moves[0],
            pokemonNormal2.currentHP - damage(pokemonNormal1, pokemonNormal2, 1), damage(pokemonNormal1, pokemonNormal2, 1)],
        [pokemonGrass, pokemonFire, pokemonGrass.moves[0],
            pokemonFire.currentHP - damage(pokemonGrass, pokemonFire, 1 / 2), damage(pokemonGrass, pokemonFire, 1 / 2)],
        [pokemonFire, pokemonGrass, pokemonFire.moves[0],
            pokemonGrass.currentHP - damage(pokemonFire, pokemonGrass, 2), damage(pokemonFire, pokemonGrass, 2)],
    ])

        (`Should return damage points and reduce pokemon hp points`,
            (attackPoke: Pokemon, defendingPoke: Pokemon, move: PokemonMove, HPLeft: number, damage: number) => {

                const defendingDamage: number = fight.fight(attackPoke, defendingPoke, move);

                expect(defendingPoke.currentHP).toBe(HPLeft);
                expect(defendingDamage).toBe(damage);
            })
})