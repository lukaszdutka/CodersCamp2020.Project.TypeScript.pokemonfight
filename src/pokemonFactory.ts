import { Pokemon } from "./pokemonClass"
import { PokemonType } from "./pokemonClass"

//(name: string, image: string, maxHP: number, attackPoints: number,
// defensePoints: number, types: PokemonType[], moves: { moveName: string; moveType: PokemonType }[]) 

export class PokemonFactory {
    readonly _pokemons: Pokemon[];

    constructor(pokeData: {
        name: string; types: string[];
        stats: { hp: number; attack: number; defense: number; };
        moves: { name: string; accuracy: number; power: number; power_points: number; type: string; }[]
    }[]) {
        this._pokemons = [];

        for (let pokemon of pokeData) {
            const pokeImg = "../assets/" + pokemon.name + ".png"
            const pokeMoves = pokemon.moves.reduce( (tab, move) => {
                tab.concat({moveName: move.name, moveType: move.type as PokemonType})
                return tab
                }, [] as {moveName: string, moveType: PokemonType}[])
            const pokeTypes: PokemonType[] = pokemon.types.map(v => v as PokemonType)
            
            const pokemonObject = new Pokemon(pokemon.name, pokeImg, 
                pokemon.stats.hp, pokemon.stats.attack, pokemon.stats.defense,
                pokeTypes, pokeMoves)

            this._pokemons.push(pokemonObject)
        }
    }

    get pokemons(): Pokemon[] {
        return this._pokemons
    }

    getPokemonByName(name: string): Pokemon | undefined {
        return this._pokemons.find( pokemon => pokemon.name === name)
    }
}