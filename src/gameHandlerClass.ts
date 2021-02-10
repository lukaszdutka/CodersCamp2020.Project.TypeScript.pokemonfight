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

  generateActionButtons(player: Player): void {
    console.log('action modal');
    const actionContainer = document.querySelector("#actionModals")!;
    actionContainer.innerHTML = `
                    <div class="button battleButton" id="attackButton">attack</div>
                    <div class="button battleButton" id="switchButton">switch</div>
                    <div class="button battleButton" id="mangoButton">use mango (<span id="mango">1</span>)</div>`;
    const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
    const attackButton = document.querySelector("#attackButton")!;
    const switchButton = document.querySelector("#switchButton")!;
    //const mangoButton = document.querySelector("#mangoButton") as HTMLDivElement;
    attackButton.addEventListener('click', () => {
      this.generateAttackButtons(player);
    });
    switchButton.addEventListener('click', () => {
      this.generateSwitchButtons(player);
    });
  }

  generateAttackButtons(player: Player): void {
    console.log('attack modal');
    const actionContainer = document.querySelector("#actionModals")!;
    actionContainer.innerHTML = `
                    <div class="button battleButton" id="attackButtonOne">${player.pokemons[0].moves[0].moveName}</div>
                    <div class="button battleButton" id="attackButtonTwo">${player.pokemons[0].moves[1].moveName}</div>
                    <div class="button battleButton" id="backButton">back</div>`;
    //const attackButtonOne = document.querySelector("#attackButtonOne") as HTMLDivElement;
    //const attackButtonTwo = document.querySelector("#attackButtonTwo") as HTMLDivElement;
    const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
    const backButton = document.querySelector("#backButton")!;
    backButton.addEventListener('click', () => {
      //timeout and style for some button animation - the animation needs to be change
      setTimeout( ()=> {
        this.generateActionButtons(player);
      }, 500);
      for(let i = 0; i < battleButtons.length; i++) {
        battleButtons[i].style.transform = 'scaleX(0)'; 
      }
    });
  }

  generateSwitchButtons(player: Player): void {
    console.log('switch pokemon modal');
    const actionContainer = document.querySelector("#actionModals")!;
    actionContainer.innerHTML = `
                    <div class="button battleButton" id="switchButtonOne">${player.pokemons[1].name}</div>
                    <div class="button battleButton" id="switchButtonTwo">${player.pokemons[2].name}</div>
                    <div class="button battleButton" id="backButton">back</div>`;
    //const switchButtonOne = document.querySelector("#switchButtonOne") as HTMLDivElement;
    //const switchButtonTwo = document.querySelector("#switchButtonTwo") as HTMLDivElement;
    const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
    const backButton = document.querySelector("#backButton")!;
    backButton.addEventListener('click', () => {
      //timeout and style for some button animation - the animation needs to be change
      setTimeout( ()=> {
        this.generateActionButtons(player);
      }, 500);
      for(let i = 0; i < battleButtons.length; i++) {
        battleButtons[i].style.transform = 'scaleX(0)';
      }
    });
  }
}
