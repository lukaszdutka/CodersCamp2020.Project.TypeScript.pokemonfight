import { showAPopUpScreen } from './showAPopUpScreen';

// setting up the starting page
setTimeout(() => {
    //Render starting page and add the help modal
    const newTemplate = document.querySelector('#starting-page-template') as HTMLTemplateElement;
    const app = document.querySelector('#app') as HTMLDivElement;
    app.innerHTML = newTemplate.innerHTML;
    const infoTemplate = document.querySelector('#info-modal-template') as HTMLTemplateElement;
    app.innerHTML += infoTemplate.innerHTML;
    // add event listeners
    const howToPlayBtn = document.querySelector('#how-to-play-btn') as HTMLUListElement;
    howToPlayBtn.addEventListener('click', () => {
        showAPopUpScreen(document.querySelector('#info-modal-template') as HTMLDivElement, 'flex');
    })
}, 2000)
