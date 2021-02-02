import { Pokemon } from "./pokemonClass";

export class Player {
  private _name: string;
  private _pokemons: Pokemon[];
  private _activePokemon: number;
  private _alivePokemons: Pokemon[];
  constructor(name: string, pokemons: Pokemon[]) {
    if (name.length > 8) {
      throw new Error("Too long name");
    }
    if (pokemons.length != 3) {
      throw new Error("Wrong number of pokemons");
    }
    this._name = name;
    this._pokemons = pokemons;
    this._activePokemon = 0;
    this._alivePokemons = pokemons;
  }

  get name(): string {
    return this._name;
  }
  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  set setActivePokemon(numOfActivePokemon: number) {
    this._activePokemon = numOfActivePokemon;
  }
  get getActivePokemon(): number {
    return this._activePokemon;
  }

  private isAlive() {
    for (let i = 0; i < this._alivePokemons.length; i++) {
      if (this._alivePokemons[i].isAlive() == false) {
        this._alivePokemons.splice(i, 1);
      }
    }
  }

  get alivePokemons(): Pokemon[] {
    this.isAlive();
    return this._alivePokemons;
  }
}
