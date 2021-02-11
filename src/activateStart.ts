export const activateStart = (name1Input: HTMLInputElement, name2Input: HTMLInputElement, startButton: HTMLButtonElement) => {
    if (name1Input.value.length > 0 && name2Input.value.length > 0 && name1Input.value.length <= 8 && name2Input.value.length <= 8) {
        startButton.className = 'button-enabled'
        startButton.disabled = false;
    } else {
        startButton.className = 'button-disabled'
        startButton.disabled = true;
    }
}

