import { Player } from "../playerClass";

export const createHPBars = (playerOne: Player, playerTwo: Player) => {
  const createBar = (player: Player, HPBar: HTMLDivElement) => {
    const maxHP = player.getActivePokemon.maxHP;
    const currentHP = player.getActivePokemon.currentHP;
    const HPInPercent = (currentHP / maxHP) * 100;
    console.log(HPInPercent);
    HPBar.style.width = `${HPInPercent}%`;
    let HPClassList = HPBar.classList;
    if (HPInPercent < 20) {
      HPClassList.remove("hpBarHighLevel");
      HPClassList.add("hpBarLowLevel");
    } else {
      HPClassList.remove("hpBarLowLevel");
      HPClassList.add("hpBarHighLevel");
    }
  };
  const playerOneHPBar = document.querySelector(
    "#hp-bar-player1"
  ) as HTMLDivElement;
  const playerTwoHPBar = document.querySelector(
    "#hp-bar-player2"
  ) as HTMLDivElement;
  createBar(playerOne, playerOneHPBar);
  createBar(playerTwo, playerTwoHPBar);
};
