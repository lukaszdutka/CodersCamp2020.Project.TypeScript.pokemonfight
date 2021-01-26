export type pokemonType = 'grass' | 'poison' | 'fire' | 'water' | 'bug' | 'normal' | 'flying' | 'electric' | 'ground' | 'fairy' | 'psychic' | 'fighting' | 'rock' | 'ground'

export abstract class Pokemon {
    constructor() {}
    abstract _image: string;
    abstract _HP: number;
    abstract _attackPoints: number; 
    abstract _defensePoints: number; 
    abstract _types: pokemonType[];
    abstract _moves: {moveName: string, moveType: pokemonType}[];
    _isAlive: boolean = true;
    _hasMango: boolean = true;

    get image() {
        return this._image;
    }

    get HP() {
        return this._HP;
    }

    set HP(newHP) {
        if (newHP <= 0) {
        this.HP = 0;
        }
        this._HP = newHP;
    }

    get attackPoints() {
        return this._attackPoints;
    }

    set attackPoints(newAttackPoints) {
        if (newAttackPoints <= 0) {
        this._attackPoints = 0;
        }
        this._attackPoints = newAttackPoints;
    }

    get defensePoints() {
        return this._defensePoints;
    }

    set defensePoints(newDefensePoints) {
        if (newDefensePoints <= 0) {
        this.defensePoints = 0;
        }
        this._defensePoints = newDefensePoints;
    }

    get types() {
        return this._types;
    }

    get moves() {
        return this._moves;
    }

    get isAlive () {
        return this._isAlive;
    }

    set isAlive (isAliveNewValue: boolean) {
         this._isAlive = isAliveNewValue;
    }

    get hasMango () {
        return this._hasMango;
    }

    set hasMango (hasMangoNewValue: boolean) {
         this._hasMango = hasMangoNewValue;
    }
}   