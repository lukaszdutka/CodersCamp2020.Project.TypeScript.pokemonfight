import {Pokemon} from "./pokemonClass"; 

export class Player{
    private _name: string;
    private _pokemons: Pokemon[];
    constructor(name:string, pokemons:Pokemon[]){
        this._name=name;
        this._pokemons=pokemons;
    }
    get name():string{
        return this._name;
    }
    get pokemons():Pokemon[]{
        return this._pokemons
    }
}