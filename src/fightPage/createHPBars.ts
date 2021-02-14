import { Player } from "../playerClass";

export const createHPBars = (playerOne: Player, playerTwo: Player) => {
  const createBar = (player: Player, HPBar: HTMLDivElement, headingHP: HTMLHeadingElement) => {
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

    player.getActivePokemon.isAlive()
      ? headingHP.style.display = 'grid'
      : headingHP.style.display = 'none';

  };
  const playerOneHPBar = document.querySelector(
    "#hp-bar-player1"
  ) as HTMLDivElement;
  const playerTwoHPBar = document.querySelector(
    "#hp-bar-player2"
  ) as HTMLDivElement;
  const playerOneHeadingHP = document.querySelector(
    "#hpProgressBarPlayer1"
  ) as HTMLHeadingElement;
  const playerTwoHeadingHP = document.querySelector(
    "#hpProgressBarPlayer2"
  ) as HTMLHeadingElement;
  createBar(playerOne, playerOneHPBar, playerOneHeadingHP);
  createBar(playerTwo, playerTwoHPBar, playerTwoHeadingHP);
};
