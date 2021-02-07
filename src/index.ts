import { showModal, hideModal } from "./modalPopUpFunctions";
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
    const startButton = document.querySelector("#start-game-btn") as HTMLDivElement;
    player1NameInput.addEventListener("keyup", () => {
        activateStart(player1NameInput, player2NameInput, startButton)
    })
    player2NameInput.addEventListener("keyup", () => {
        activateStart(player1NameInput, player2NameInput, startButton)
    })
};
const renderApp = () => {
  const app = document.querySelector("#app") as HTMLDivElement;
  renderStartingPage(app);
  renderHowToPlayModal(app);
  createHowToPlayButton();
  activateStartButton();
};

setTimeout(renderApp, 2000);
