import { Pokemon } from "./pokemonClass";

export class Player {
  private _name: string;
  private _pokemons: Pokemon[];
  private _indexOfActivePokemon: number;
  private _hasMango: Boolean;
  constructor(name: string, pokemons: Pokemon[]) {
    if (name.length > 8) {
      throw new Error("Too long name");
    }
    if (pokemons.length > 3) {
      throw new Error("Wrong number of pokemons");
    }
    this._name = name;
    this._pokemons = pokemons;
    this._indexOfActivePokemon = 0;
    this._hasMango = true;
  }

  get name(): string {
    return this._name;
  }
  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  set indexOfActivePokemon(numOfActivePokemon: number) {
    this._indexOfActivePokemon = numOfActivePokemon;
  }
  get getActivePokemon(): Pokemon {
    return this._pokemons[this._indexOfActivePokemon];
  }

  get alivePokemons(): Pokemon[] {
    const alivePokemonsTab: Pokemon[] = this.pokemons.filter((pokemon) =>
      pokemon.isAlive()
    );
    return alivePokemonsTab;
  }

  reduceNumberMango(): void {
    this._hasMango = false;
  }

  get hasMango() {
    return this._hasMango;
  }

  addPokemon(pokemon: Pokemon): void {
    this._pokemons.push(pokemon);
  }
}
