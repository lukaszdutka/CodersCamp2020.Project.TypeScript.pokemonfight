import { Pokemon } from "./pokemonClass"
import { PokemonType } from "./pokemonClass"


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
                tab.push({moveName: move.name, moveType: move.type as PokemonType})
                return tab
                }, [] as {moveName: string, moveType: PokemonType}[])

            const pokeTypes: PokemonType[] = pokemon.types.map(v => v as PokemonType)

            const pokemonObject = new Pokemon(this._capitalize(pokemon.name), pokeImg, 
                pokemon.stats.hp, pokemon.stats.attack, pokemon.stats.defense,
                pokeTypes, pokeMoves)

            this._pokemons.push(pokemonObject)
        }
    }

    get pokemons(): Pokemon[] {
        return this._pokemons
    }

    getPokemonByName(name: string): Pokemon {
        const pokemon = this._pokemons.find( pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
        if (pokemon === undefined) {
            throw new Error(`Pokemon ${name} is not found in the pokemon factory`)
        }
        return pokemon
    }

    _capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
}

