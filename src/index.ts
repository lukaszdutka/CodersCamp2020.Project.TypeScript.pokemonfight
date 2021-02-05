import { showAPopUpScreen } from './showAPopUpScreen';

const app = document.querySelector('#app') as HTMLDivElement

const renderStartingPage = () => {
    const startingPage = document.querySelector('#starting-page-template') as HTMLTemplateElement;
    app.innerHTML = startingPage.innerHTML;
}
const renderInfoModal = () => {
    const infoModal = document.querySelector('#info-modal-template') as HTMLTemplateElement;
    app.innerHTML += infoModal.innerHTML;
}
const createHowToPlayButton = () => {
    const howToPlayBtn = document.querySelector('#how-to-play-button') as HTMLUListElement;
    const infoModal = document.querySelector('#info-modal-screen') as HTMLDivElement;
    howToPlayBtn.addEventListener('click', () => {
        showAPopUpScreen(infoModal, 'flex');
    })
}
const renderApp = () => {
    renderStartingPage();
    renderInfoModal()
    createHowToPlayButton();
}

setTimeout(renderApp, 2000);
