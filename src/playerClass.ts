
export class Player{
    private _name: string;
    private _pokemons: string[];
    constructor(name:string, pokemons:string[]){
        this._name=name;
        this._pokemons=pokemons;
    }
    get name():string{
        return this._name;
    }
    get pokemons():string[]{
        return this._pokemons
    }
}