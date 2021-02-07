export const activateStart = (name1Input: HTMLInputElement, name2Input: HTMLInputElement, startButton: HTMLDivElement) => {
    if (name1Input.value.length > 0 && name2Input.value.length > 0) {
        startButton.className = 'button-enabled'
    } else {
        startButton.className = 'button-disabled'
    }
}