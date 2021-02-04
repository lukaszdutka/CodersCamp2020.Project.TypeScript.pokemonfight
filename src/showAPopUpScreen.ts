export const showAPopUpScreen = (screenToDisplay: HTMLDivElement, startingPosition: string) => {
    // display the help screen
     screenToDisplay.style.display = startingPosition;
    // function which gets called when the exit button is clicked
    if (screenToDisplay.querySelector('.exitBtn')) {
         const exitPopUpFunction = () => {
             //hide the screen
             screenToDisplay.style.display = 'none';
             // remove the event listener
             screenToDisplay.querySelector('.exitBtn')?.removeEventListener('click', exitPopUpFunction);
     };
     // add event listener to the exit button;
     screenToDisplay.querySelector('.exitBtn')?.addEventListener('click', exitPopUpFunction);
     }
  };