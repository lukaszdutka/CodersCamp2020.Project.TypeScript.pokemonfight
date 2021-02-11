import { Player } from "../playerClass";
import { GameHandler } from "../gameHandlerClass";

export const createFightPagePokeballs = (gameHandler: GameHandler) => {
    const changeClassOfDisabledPokemons = (
      player: Player,
      playerPokeballs: HTMLImageElement[]
    ) => {
      for (let i = 2; i > player.alivePokemons.length - 1; i--) {
        playerPokeballs[i].classList.add("disabledPokemon");
      }
    };
    const playerOnePokeballs = Array.from(
      document.querySelectorAll("#fight-page-player1 .pokeballWithPokemon")
    ) as HTMLImageElement[];
    const playerTwoPokeballs = Array.from(
      document.querySelectorAll("#fight-page-player2 .pokeballWithPokemon")
    ) as HTMLImageElement[];
    changeClassOfDisabledPokemons(gameHandler.playerOne, playerOnePokeballs);
    changeClassOfDisabledPokemons(gameHandler.playerTwo, playerTwoPokeballs);
  };