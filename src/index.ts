function renderChoosePokemonScreen(appDiv: HTMLDivElement){
  const playButton = document.querySelector("#start-game-btn") as HTMLDivElement;
  playButton?.addEventListener("click", () => {
    const choosePokemonScreen = document.querySelector("#choose-page-template") as HTMLTemplateElement;
    appDiv.innerHTML = choosePokemonScreen.innerHTML;
  });
}

