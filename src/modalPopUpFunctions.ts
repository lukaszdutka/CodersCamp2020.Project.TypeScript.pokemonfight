export const showModal = (
  screenToDisplay: HTMLDivElement,
  startingPosition: string
) => {
  screenToDisplay.style.display = startingPosition;
};

export const hideModal = (screenToDisplay: HTMLDivElement) => {
  const exitButton = screenToDisplay.querySelector(".exitButton");
  exitButton?.addEventListener("click", () => {
    screenToDisplay.style.display = "none";
  });
};
