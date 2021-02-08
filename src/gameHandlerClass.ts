import { Player } from "./playerClass";

export class GameHandler {
  constructor(
    private readonly _playerOne: Player,
    private readonly _playerTwo: Player
  ) {}

  private _currentPlayer: Player = this._playerOne;

  get playerOne () {
    return this._playerOne;
  }

  get playerTwo() {
    return this._playerTwo;
  }

  get currentPlayer(): Player {
    return this._currentPlayer;
  }

  get opponentPlayer(): Player {
    if (this._currentPlayer === this._playerOne) return this._playerTwo;
    return this._playerOne;
  }

  private didPlayerLoose(player: Player): boolean {
    return player.alivePokemons.length === 0;
  }

  isGameFinished(): boolean {
    return (
      this.didPlayerLoose(this._playerOne) ||
      this.didPlayerLoose(this._playerTwo)
    );
  }

  getWinner(): Player | Error {
    if (!this.isGameFinished())
      throw new Error("You cannot get the winner. The game is not over.");
    return this.didPlayerLoose(this._playerOne) === true
      ? this._playerTwo
      : this._playerOne;
  }
}
