export type PokemonType =
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


export type PokemonMove = { moveName: string; moveType: PokemonType }

export class Pokemon {

  private readonly _name: string;
  private readonly _image: string;
  private readonly _maxHP: number;
  private _currentHP: number;
  private readonly _attackPoints: number;
  private readonly _defensePoints: number;
  private readonly _types: PokemonType[];
  private readonly _moves: PokemonMove[];

  constructor(name: string, image: string, maxHP: number, attackPoints: number,
    defensePoints: number, types: PokemonType[], moves: { moveName: string; moveType: PokemonType }[]) {

    this._name = name;
    this._image = image;
    this._maxHP = maxHP;
    this._currentHP = maxHP;
    this._attackPoints = attackPoints;
    this._defensePoints = defensePoints;
    this._types = types;
    this._moves = moves;
  }


  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }

  get currentHP() {
    return this._currentHP;
  }

  get maxHP() {
    return this._maxHP;
  }

  subtractHP(pointsToSubtract: number): void {
    const newHP: number = this._currentHP - pointsToSubtract;
    if (newHP < 0) {
      this._currentHP = 0;
    } else {
      this._currentHP = newHP;
    }
    
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
