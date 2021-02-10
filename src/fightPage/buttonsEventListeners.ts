import { Player } from "../playerClass";
import { GameHandler } from "../gameHandlerClass";

export const actionsButtonEventListener = (player: Player, gameHandler: GameHandler) => {

  const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
    const attackButton = document.querySelector("#attackButton")!;
    const switchButton = document.querySelector("#switchButton")!;
    const mangoButton = document.querySelector("#mangoButton")!;
    attackButton.addEventListener('click', () => {
      gameHandler.generateAttackButtons(player);
    });
    switchButton.addEventListener('click', () => {
      gameHandler.generateSwitchButtons(player);
    });
    mangoButton.addEventListener('click', () => {
      console.log('mango used! mnia mnia mnia...');
      const mango = document.querySelector("#mango")!;
      mango.innerHTML = "0";
      mangoButton.classList.add("disabledButton");
    })
}

export const attacksButtonEventListener = (player: Player, gameHandler: GameHandler) => {

    const attackButtonOne = document.querySelector("#attackButtonOne") as HTMLDivElement;
    const attackButtonTwo = document.querySelector("#attackButtonTwo") as HTMLDivElement;
    const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
    const backButton = document.querySelector("#backButton")!;

    attackButtonOne.addEventListener('click', () => {
      console.log('attack One used!');
      setTimeout( ()=> {
        gameHandler.generateActionButtons(player);
      }, 500);
      //also change player function 
      for(let i = 0; i < battleButtons.length; i++) {
        battleButtons[i].style.backgroundColor = 'green';
      }
    });
    attackButtonTwo.addEventListener('click', () => {
      console.log('attack Two used!');
      setTimeout( ()=> {
        gameHandler.generateActionButtons(player);
      }, 500);
      // also change player function
      for(let i = 0; i < battleButtons.length; i++) {
        battleButtons[i].style.backgroundColor = 'green';
      }
    });
    backButton.addEventListener('click', () => {
      //timeout and style for some button animation - the animation needs to be change
      setTimeout( ()=> {
        gameHandler.generateActionButtons(player);
      }, 500);
      for(let i = 0; i < battleButtons.length; i++) {
        battleButtons[i].style.backgroundColor = 'green';
      }
    });
  }

  export const switchButtonEventListener = (player: Player, gameHandler: GameHandler) => {

    const switchButtonOne = document.querySelector("#switchButtonOne") as HTMLDivElement;
    const switchButtonTwo = document.querySelector("#switchButtonTwo") as HTMLDivElement;
    const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
    const backButton = document.querySelector("#backButton")!;

    switchButtonOne.addEventListener('click', () => {
      console.log('pokemon One gooo!');
      setTimeout( ()=> {
        gameHandler.generateActionButtons(player);
      }, 500);
      // also change player function
      for(let i = 0; i < battleButtons.length; i++) {
        battleButtons[i].style.backgroundColor = 'green';
      }
    });
    switchButtonTwo.addEventListener('click', () => {
      console.log('pokemon Two gooo!');
      setTimeout( ()=> {
        gameHandler.generateActionButtons(player);
      }, 500);
      // also change player function
      for(let i = 0; i < battleButtons.length; i++) {
        battleButtons[i].style.backgroundColor = 'green';
      }
    });
    backButton.addEventListener('click', () => {
      //timeout and style for some button animation - the animation needs to be change
      setTimeout( ()=> {
        gameHandler.generateActionButtons(player);
      }, 500);
      for(let i = 0; i < battleButtons.length; i++) {
        battleButtons[i].style.backgroundColor = 'green';
      }
    });
}