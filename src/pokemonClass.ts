export type pokemonType =
  | "grass"
  | "poison"
  | "fire"
  | "water"
  | "bug"
  | "normal"
  | "flying"
  | "electric"
  | "ground"
  | "fairy"
  | "psychic"
  | "fighting"
  | "rock";

export abstract class Pokemon {
  constructor() {}
  abstract readonly _name: string;
  abstract readonly _image: string;
  abstract readonly _maxHP: number;
  abstract _currentHP: number;
  abstract _attackPoints: number;
  abstract _defensePoints: number;
  abstract readonly _types: pokemonType[];
  abstract readonly _moves: { moveName: string; moveType: pokemonType }[];
  abstract _isAlive: boolean = true;

  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }

  get currentHP() {
    return this._currentHP;
  }

  set currentHP(newHP) {
    if (newHP <= 0) {
      this._currentHP = 0;
    }
    if (newHP >= this._maxHP) {
      this._currentHP = this._maxHP;
    }
    this._currentHP = newHP;
  }

  get attackPoints() {
    return this._attackPoints;
  }

  get defensePoints() {
    return this._defensePoints;
  }

  get types() {
    return this._types;
  }

  get moves() {
    return this._moves;
  }

  get isAlive() {
    return this._currentHP > 0
  }
}
