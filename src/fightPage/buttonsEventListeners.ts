import { Player } from "../playerClass";
import { GameHandler } from "../gameHandlerClass";
import { createActivePokemon } from "./createActivePokemon";
import { createActivePlayer } from "./createActivePlayer";
import { createHPBars } from "./createHPBars";
import { createFightPagePokeballs } from "./createFightPagePokeballs";

export const actionsButtonEventListener = (
  //player: Player,
  gameHandler: GameHandler
) => {
  const battleButtons = document.getElementsByClassName(
    "battleButton"
  )! as HTMLCollectionOf<HTMLElement>;
  const attackButton = document.querySelector(
    "#attackButton"
  )! as HTMLDivElement;
  const switchButton = document.querySelector(
    "#switchButton"
  )! as HTMLDivElement;
  const mangoButton = document.querySelector("#mangoButton")! as HTMLDivElement;
  const mango = document.querySelector("#mango")! as HTMLDivElement;

  animationButtonsEntry(battleButtons);

  attackButton.addEventListener("click", () => {
    animationButtonsExit(battleButtons);
    setTimeout(() => {
      gameHandler.generateAttackButtons();
    }, 1000);
  });
  switchButton.addEventListener("click", () => {
    animationButtonsExit(battleButtons);
    setTimeout(() => {
      gameHandler.generateSwitchButtons();
    }, 1000);
  });

  if (gameHandler.currentPlayer.hasMango) {
    magicFunction(mangoButton, battleButtons, gameHandler, eatMango);
  } else {
    mango.innerHTML = "0";
    mangoButton.classList.add("disabledButton");
  }
};

export const attacksButtonEventListener = (gameHandler: GameHandler) => {
  const attackButtonOne = document.querySelector(
    "#attackButtonOne"
  )! as HTMLDivElement;
  const attackButtonTwo = document.querySelector(
    "#attackButtonTwo"
  )! as HTMLDivElement;
  const battleButtons = document.getElementsByClassName(
    "battleButton"
  )! as HTMLCollectionOf<HTMLElement>;
  const backButton = document.querySelector("#backButton")! as HTMLDivElement;

  animationButtonsEntry(battleButtons);
  magicFunction(attackButtonOne, battleButtons, gameHandler, attack);
  magicFunction(attackButtonTwo, battleButtons, gameHandler, attack);
  magicFunction(backButton, battleButtons, gameHandler);
};

export const switchButtonEventListener = (gameHandler: GameHandler) => {
  const switchButtonOne = document.querySelector(
    "#switchButtonOne"
  )! as HTMLDivElement;
  const switchButtonTwo = document.querySelector(
    "#switchButtonTwo"
  )! as HTMLDivElement;
  const battleButtons = document.getElementsByClassName(
    "battleButton"
  )! as HTMLCollectionOf<HTMLElement>;
  const backButton = document.querySelector("#backButton")! as HTMLDivElement;

  animationButtonsEntry(battleButtons);

  magicFunction(switchButtonOne, battleButtons, gameHandler, switchPoke);
  magicFunction(switchButtonTwo, battleButtons, gameHandler, switchPoke);
  magicFunction(backButton, battleButtons, gameHandler);
};

const magicFunction = (
  button: HTMLDivElement,
  buttons: HTMLCollectionOf<HTMLElement>,
  gameHandler: GameHandler,
  functionToCall?: any
) => {
  button.addEventListener("click", (e) => {
    console.log(`${button.innerText} used!`);
    if (functionToCall) {
      functionToCall(gameHandler, e);
      createActivePokemon(gameHandler);
      createHPBars(gameHandler.playerOne, gameHandler.playerTwo);
      createFightPagePokeballs(gameHandler);
      gameHandler.switchPlayer();
      createActivePlayer(gameHandler);
    }
    setTimeout(() => {
      gameHandler.generateActionButtons();
    }, 1000);
    animationButtonsExit(buttons);
  });
};

const animationButtonsEntry = (buttons: HTMLCollectionOf<HTMLElement>) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.animation =
      "scale-in-hor-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    buttons[i].style.animationDelay = `${i * 0.15}s`;
  }
};

const animationButtonsExit = (buttons: HTMLCollectionOf<HTMLElement>) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.animation =
      "scale-out-horizontal 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    buttons[i].style.animationDelay = `${i * 0.15}s`;
  }
};

const attack = (gameHandler: GameHandler) => {
  console.log("bum bum bach!");
};

const switchPoke = (gameHandler: GameHandler, event: Event) => {
  const nameOfChosenPokemon = (event.currentTarget as HTMLDivElement)
    .textContent;
  gameHandler.switchPokemon(nameOfChosenPokemon!);
};

const eatMango = (gameHandler: GameHandler) => {
  const mangoButton = document.querySelector("#mangoButton")! as HTMLDivElement;
  const mango = document.querySelector("#mango")! as HTMLDivElement;
  gameHandler.currentPlayer.useMango();
  mango.innerHTML = "0";
  mangoButton.classList.add("disabledButton");
};
