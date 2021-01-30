import { Pokemon } from "./pokemonClass";

export class Player {
  private _name: string;
  private _pokemons: Pokemon[];
  constructor(name: string, pokemons: Pokemon[]) {
    if (name.length > 20) {
      throw new Error("Too long name");
    }
    if (pokemons.length != 3) {
      throw new Error("Wrong number of pokemons");
    }
    this._name = name;
    this._pokemons = pokemons;
  }
  get name(): string {
    return this._name;
  }
  get pokemons(): Pokemon[] {
    return this._pokemons;
  }
}
