import { Player } from "../playerClass";
import { startBattle } from "../fightPage/startBattle";


export const startGameIfReady = (playerOne: Player, playerTwo: Player) => {
  if (playerOne.pokemons.length < 3 || playerTwo.pokemons.length < 3) return;
  const app = document.querySelector("#app") as HTMLDivElement;
  startBattle(playerOne, playerTwo, app);
};
