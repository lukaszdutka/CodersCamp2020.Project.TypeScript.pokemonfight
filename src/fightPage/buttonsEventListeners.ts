import { Player } from "../playerClass";
import { GameHandler } from "../gameHandlerClass";


export const actionsButtonEventListener = (player: Player, gameHandler: GameHandler) => {

  const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
  const attackButton = document.querySelector("#attackButton")! as HTMLDivElement;
  const switchButton = document.querySelector("#switchButton")! as HTMLDivElement;
  const mangoButton = document.querySelector("#mangoButton")! as HTMLDivElement;
  const mango = document.querySelector("#mango")! as HTMLDivElement;

  attackButton.addEventListener('click', () => {
    gameHandler.generateAttackButtons(player);
  });
  switchButton.addEventListener('click', () => {
    gameHandler.generateSwitchButtons(player);
  });

  if(true) { //gameHandler.canUseMango()
    mangoButton.addEventListener('click', () => {
      //gameHandler.useMango();
      console.log('mango used! mnia mnia mnia...'); //needs to be deleted
      mango.innerHTML = "0";
      mangoButton.classList.add("disabledButton");
    });
  } else {
    mango.innerHTML = "0";
    mangoButton.classList.add("disabledButton");
  }
}

export const attacksButtonEventListener = (player: Player, gameHandler: GameHandler) => {

  const attackButtonOne = document.querySelector("#attackButtonOne")! as HTMLDivElement;
  const attackButtonTwo = document.querySelector("#attackButtonTwo")! as HTMLDivElement;
  const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
  const backButton = document.querySelector("#backButton")! as HTMLDivElement;

  magicFunction(attackButtonOne, battleButtons, player, gameHandler, attack);
  magicFunction(attackButtonTwo, battleButtons, player, gameHandler, attack);
  magicFunction(backButton, battleButtons, player, gameHandler);
  }

  export const switchButtonEventListener = (player: Player, gameHandler: GameHandler) => {

  const switchButtonOne = document.querySelector("#switchButtonOne")! as HTMLDivElement;
  const switchButtonTwo = document.querySelector("#switchButtonTwo")! as HTMLDivElement;
  const battleButtons = document.getElementsByClassName("battleButton")! as HTMLCollectionOf<HTMLElement>;
  const backButton = document.querySelector("#backButton")! as HTMLDivElement;

  magicFunction(switchButtonOne, battleButtons, player, gameHandler, switchPoke);
  magicFunction(switchButtonTwo, battleButtons, player, gameHandler, switchPoke);
  magicFunction(backButton, battleButtons, player, gameHandler);
}


const magicFunction = (button: HTMLDivElement, buttons: HTMLCollectionOf<HTMLElement>, player: Player, gameHandler: GameHandler, functionToCall?: any) => {
  button.addEventListener('click', () => {
    console.log(`${button.innerText} used!`);
    if (functionToCall) { functionToCall(); } // ??
    setTimeout( ()=> {
      gameHandler.generateActionButtons(player);
    }, 500);
    //also change player function 
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = 'green';
    }
  } );
}


// funcions just for check if its works should be replaced with gameHandler > use attack or switch Pokemon functions
const attack = () => {
  console.log('bum bum bach!');
}
const switchPoke = () => {
  console.log('puff!');
}