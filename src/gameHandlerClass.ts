import { Player } from "./playerClass";
import { Pokemon } from "./pokemonClass";

export class GameHandler {
  constructor(private _playerOne: Player, private _playerTwo: Player) {}

  _currentPlayer: Player = this._playerOne;

  getCurrentPlayer(): Player {
    return this._currentPlayer;
  }

  getOpponentPlayer(): Player {
    if (this._currentPlayer === this._playerOne) return this._playerTwo;
    return this._playerOne;
  }

  isGameFinished(): boolean {
    const firstPlayerPokemons: Pokemon[] = this._playerOne.pokemons;
    const secondPlayerPokemons: Pokemon[] = this._playerTwo.pokemons;
    const allPokemons = firstPlayerPokemons.concat(secondPlayerPokemons);
    const allHPs = allPokemons.map((pokemon) => pokemon._currentHP);
    if (!allHPs.includes(0)) {
      return false;
    } else {
      return true;
    }
  }

  getWinner(): Player | Error {
    if (!this.isGameFinished())
      return new Error("You cannot get the winner. The game is not over.");
    const getallHPs = (player: Player): number[] =>
      player.pokemons.map((pokemon) => pokemon._currentHP);
    const firstPlayerPokemonsHP: number[] = getallHPs(this._playerOne);
    if (firstPlayerPokemonsHP.includes(0)) {
      return this._playerOne;
    } else {
      return this._playerTwo;
    }
  }
}
