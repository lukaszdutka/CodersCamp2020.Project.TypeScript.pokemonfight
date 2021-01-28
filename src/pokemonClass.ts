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
  abstract readonly _attackPoints: number;
  abstract readonly _defensePoints: number;
  abstract readonly _types: pokemonType[];
  abstract readonly _moves: { moveName: string; moveType: pokemonType }[];

  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }

  get currentHP() {
    return this._currentHP;
  }

  subtractHP(pointsToSubtract: number): void {
    const newHP = this._currentHP - pointsToSubtract;
    if (newHP < 0) {
      this._currentHP = 0;
    }
    this._currentHP = newHP;
  }

  heal(): void {
    this._currentHP = this._maxHP;
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

  isAlive(): boolean {
    return this._currentHP > 0;
  }
}
