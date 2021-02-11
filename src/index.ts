import { showModal, hideModal } from "./modalPopUpFunctions";
import { createChoosePage } from "./choosePokemonsPage/choosePokemonsPage"
import { Player } from "./playerClass";
import { activateStart } from './activateStart';

const renderStartingPage = (appDiv: HTMLDivElement) => {
  const startingPage = document.querySelector(
    "#starting-page-template"
  ) as HTMLTemplateElement;
  appDiv.innerHTML = startingPage.innerHTML;
};
const renderHowToPlayModal = (appDiv: HTMLDivElement) => {
  const infoModal = document.querySelector(
    "#info-modal-template"
  ) as HTMLTemplateElement;
  appDiv.innerHTML += infoModal.innerHTML;
};
const createHowToPlayButton = () => {
  const howToPlayButton = document.querySelector(
    "#how-to-play-button"
  ) as HTMLUListElement;
  const infoModal = document.querySelector(
    "#info-modal-screen"
  ) as HTMLDivElement;
  howToPlayButton.addEventListener("click", () => {
    showModal(infoModal, "flex");
  });
  hideModal(infoModal);
};

const activateStartButton = () => {
  const player1NameInput = document.querySelector('#enter-player1-name') as HTMLInputElement;
  const player2NameInput = document.querySelector('#enter-player2-name') as HTMLInputElement;
  const startButton = document.querySelector("#start-game-button") as HTMLButtonElement;
  player1NameInput.addEventListener("keyup", () => {
      activateStart(player1NameInput, player2NameInput, startButton)
  })
  player2NameInput.addEventListener("keyup", () => {
      activateStart(player1NameInput, player2NameInput, startButton)
  });
};

const renderChoosePokemonScreen = (appDiv: HTMLDivElement) => {
  const playButton = document.querySelector(
    "#start-game-button"
  ) as HTMLButtonElement;
  playButton?.addEventListener("click", () => {
    const player1NameInput = (document.querySelector('#enter-player1-name') as HTMLInputElement).value;
    const player2NameInput = (document.querySelector('#enter-player2-name') as HTMLInputElement).value;
    const choosePokemonScreen = document.querySelector(
      "#choose-page-template"
    ) as HTMLTemplateElement;
    appDiv.innerHTML = choosePokemonScreen.innerHTML;
    createChoosePage(new Player(player1NameInput, []), new Player(player2NameInput, []));
  });
}

const renderApp = () => {
  const app = document.querySelector("#app") as HTMLDivElement;
  renderStartingPage(app);
  renderHowToPlayModal(app);
  activateStartButton();
  createHowToPlayButton();
  renderChoosePokemonScreen(app);
};

setTimeout(renderApp, 2000);

