import { Player } from "../playerClass";

export const createPokeballs = (playerOne: Player, activePlayer: Player) => {
  const playerPokeballs: HTMLImageElement[] =
    activePlayer === playerOne
      ? Array.from(document.querySelectorAll("#choosePagePlayer1 img"))
      : Array.from(document.querySelectorAll("#choosePagePlayer2 img"));
  const playerLastPokemonName: string = activePlayer.pokemons[
    activePlayer.pokemons.length - 1
  ].name.toLowerCase();
  const numberOfLastPokemon: number = activePlayer.pokemons.length - 1;
  playerPokeballs[numberOfLastPokemon].setAttribute(
    "src",
    `./${playerLastPokemonName}.png`
  );
  playerPokeballs[numberOfLastPokemon].style.animation = "bounce-in-fwd 1.1s both";
};
