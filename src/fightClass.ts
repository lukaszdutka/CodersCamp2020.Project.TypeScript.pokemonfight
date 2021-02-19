import { Pokemon, PokemonType } from "./pokemonClass";
import { PokemonMove } from "./pokemonClass";

export class Fight {

    private readonly _fightChart =
        [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
        [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
        [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
        [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
        [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
        [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
        [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
        [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
        [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
        [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
        [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
        [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
        [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
        [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
        [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1]];

    private readonly _typesForChart = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"]

    private _getEffect(attackType: PokemonType, pokemonDefenceType: PokemonType): number {
        if (!this._typesForChart.includes(attackType as string)) {
            throw new Error("Attack type does not exist")
        } 
        if (!this._typesForChart.includes(pokemonDefenceType as string)) {
            throw new Error("Pokemon type does not exist")
        }
        return this._fightChart[this._typesForChart.indexOf(attackType)][this._typesForChart.indexOf(pokemonDefenceType)]
    }

    private _calcualteDamage(attackingPokemon: Pokemon, deffendingPokemon: Pokemon, move: PokemonMove): number {
        const minimumDamage = 5;
        const baseDamage: number = attackingPokemon.attackPoints - deffendingPokemon.defensePoints;
        return Math.max(baseDamage, minimumDamage) * this.calculateAttackEffectiveness(move.moveType, deffendingPokemon.types);
    }

    calculateAttackEffectiveness(attackType: PokemonType, pokemonDefenceTypes: PokemonType[]): number {
        const damagePerType: number[] = pokemonDefenceTypes.map( (pokemonType: any): number => this._getEffect(attackType, pokemonType))
        return damagePerType.reduce( (accumulator: number, value: number) => accumulator * value, 1)
    }

    fight(attackingPokemon: Pokemon, deffendingPokemon: Pokemon, move: PokemonMove): number {
        const damage: number = this._calcualteDamage(attackingPokemon, deffendingPokemon, move);
        deffendingPokemon.subtractHP(damage);
        return damage
    }
}
