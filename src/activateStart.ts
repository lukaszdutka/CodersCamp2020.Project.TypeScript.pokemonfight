// import { config } from '../styles/SASS/config.scss'
// Activate start button when both players set names

export const activateStart = (name1Input: HTMLInputElement, name2Input: HTMLInputElement, startButton: HTMLDivElement) => {
    if (name1Input.value.length > 0 && name2Input.value.length > 0) {
        startButton.style.backgroundColor = '#e8f1f2ff';
        // startButton.style.backgroundColor = config.;
        startButton.style.color = '#020402ff'
        // startButton.addEventListener("click", renderChoosingScreen)
    } else {
        startButton.style.backgroundColor = '#9b1d20ff';
        startButton.style.color = '#9b1d20ff'
        // startButton.removeEventListener("click", renderChoosingScreen)
    }
}