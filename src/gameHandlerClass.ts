import { Player } from "./playerClass";
import { actionsButtonEventListener, attacksButtonEventListener, switchButtonEventListener } from "./fightPage/buttonsEventListeners";

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

  generateActionButtons(player: Player): void {
    const actionContainer = document.querySelector("#actionModals")!;
    actionContainer.innerHTML = `
                    <div class="button battleButton" id="attackButton">attack</div>
                    <div class="button battleButton" id="switchButton">switch</div>
                    <div class="button battleButton" id="mangoButton">use mango (<span id="mango">1</span>)</div>`;
    actionsButtonEventListener(player, this);
  }

  generateAttackButtons(player: Player): void {
    const actionContainer = document.querySelector("#actionModals")!;
    actionContainer.innerHTML = `
                    <div class="button battleButton" id="attackButtonOne">${player.pokemons[0].moves[0].moveName}</div>
                    <div class="button battleButton" id="attackButtonTwo">${player.pokemons[0].moves[1].moveName}</div>
                    <div class="button battleButton" id="backButton">back</div>`;
    attacksButtonEventListener(player, this);
  }

  generateSwitchButtons(player: Player): void {
    const actionContainer = document.querySelector("#actionModals")!;
    actionContainer.innerHTML = `
                    <div class="button battleButton" id="switchButtonOne">${player.pokemons[1].name}</div>
                    <div class="button battleButton" id="switchButtonTwo">${player.pokemons[2].name}</div>
                    <div class="button battleButton" id="backButton">back</div>`;
    switchButtonEventListener(player, this);
  }
}
