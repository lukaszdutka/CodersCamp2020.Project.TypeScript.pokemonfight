import { Player } from "../playerClass";
import { renderFightPage } from "./renderFightPage";

export const startGameIfReady = (playerOne: Player, playerTwo: Player) => {
  if (playerOne.pokemons.length < 3 || playerTwo.pokemons.length < 3) return;
  const app = document.querySelector("#app") as HTMLDivElement;
  setTimeout(() => renderFightPage(app), 2000);
};
