export const showAModal = (
  screenToDisplay: HTMLDivElement,
  startingPosition: string
) => {
  screenToDisplay.style.display = startingPosition;
};

export const hideAModal = (screenToDisplay: HTMLDivElement) => {
  const exitButton = screenToDisplay.querySelector(".exitButton");
  exitButton?.addEventListener("click", () => {
    screenToDisplay.style.display = "none";
  });
};
