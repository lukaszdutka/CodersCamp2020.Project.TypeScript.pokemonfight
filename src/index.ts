import { showModal, hideModal } from "./modalPopUpFunctions";
import { renderChoosePage } from "./choosePokemonsPage"
import { Player } from "./playerClass";

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
const renderApp = () => {
  const app = document.querySelector("#app") as HTMLDivElement;
  renderStartingPage(app);
  renderHowToPlayModal(app);
  createHowToPlayButton();
};

// setTimeout(renderApp, 2000);


  const choosePage = document.querySelector(
    "#choose-page-template"
  ) as HTMLTemplateElement;
  (document.querySelector("#app") as HTMLDivElement).innerHTML = choosePage.innerHTML;

renderChoosePage(new Player('Ola', []), new Player ('Łuki', []));