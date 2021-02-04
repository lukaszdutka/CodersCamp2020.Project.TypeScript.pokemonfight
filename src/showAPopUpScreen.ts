export const showAPopUpScreen = (screenToDisplay: HTMLDivElement, startingPosition: string) => {
    // display the help screen
     screenToDisplay.style.display = startingPosition;
    // function which gets called when the exit button is clicked
    const exitButton = screenToDisplay.querySelector('.exitBtn');
    if (exitButton) {
         const exitPopUpFunction = () => {
             //hide the screen
             screenToDisplay.style.display = 'none';
             // remove the event listener
             exitButton?.removeEventListener('click', exitPopUpFunction);
     };
     // add event listener to the exit button;
     exitButton?.addEventListener('click', exitPopUpFunction);
     }
  };