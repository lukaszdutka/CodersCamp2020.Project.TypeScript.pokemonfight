import { showModal, hideModal } from "./modalPopUpFunctions";

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

const renderChoosePokemonScreen = (appDiv: HTMLDivElement) => {
  const playButton = document.querySelector(
    "#start-game-button"
  ) as HTMLDivElement;
  playButton?.addEventListener("click", () => {
    const choosePokemonScreen = document.querySelector(
      "#choose-page-template"
    ) as HTMLTemplateElement;
    appDiv.innerHTML = choosePokemonScreen.innerHTML;
  });
};

const renderApp = () => {
  const app = document.querySelector("#app") as HTMLDivElement;
  renderStartingPage(app);
  renderHowToPlayModal(app);
  createHowToPlayButton();
  renderChoosePokemonScreen(app);
};

setTimeout(renderApp, 2000);
