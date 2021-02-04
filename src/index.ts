import { activateStart } from './activateStart';

// Activate start button when both players set names
const player1NameInput = document.querySelector('#enter-player1-name') as HTMLInputElement;
const player2NameInput = document.querySelector('#enter-player2-name') as HTMLInputElement;
const startButton = document.querySelector("#start-game-btn") as HTMLDivElement;

player1NameInput.addEventListener("keyup", () => {
    activateStart(player1NameInput, player2NameInput, startButton)
})

player2NameInput.addEventListener("keyup", () => {
    activateStart(player1NameInput, player2NameInput, startButton)
})