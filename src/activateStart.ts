// import { config } from '../styles/SASS/config.scss'
// Activate start button when both players set names

export const activateStart = (name1Input: HTMLInputElement, name2Input: HTMLInputElement, startButton: HTMLDivElement) => {
    if (name1Input.value.length > 0 && name2Input.value.length > 0) {
        startButton.className = 'button'
        // startButton.addEventListener("click", renderChoosingScreen)
    } else {
        startButton.className = 'button-disabled'
    }
}