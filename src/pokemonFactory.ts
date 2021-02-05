import { Pokemon } from "./pokemonClass"
import { PokemonType } from "./pokemonClass"

//(name: string, image: string, maxHP: number, attackPoints: number,
// defensePoints: number, types: PokemonType[], moves: { moveName: string; moveType: PokemonType }[]) 

export class PokemonFactory {
    readonly pokemons: PokemonType[];

    constructor(pokeData: [{name: string, types: PokemonType[], stats: {}, moves:[]}]) {
        this.pokemons = [];

        for (let pokemon of pokeData) {
            //const pokemonObject = new Pokemon(pokemon.name, pokemon)
        }
    }
}