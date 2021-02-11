import { Player } from "../playerClass";
import { GameHandler } from "../gameHandlerClass";

export const createActivePokemon = (gameHandler: GameHandler) => {
  const playerOneActivePokemonImageArea = document.querySelector(
    "#pokemon-image-player1"
  ) as HTMLImageElement;
  const playerTwoActivePokemonImageArea = document.querySelector(
    "#pokemon-image-player2"
  ) as HTMLImageElement;
  const playerOneActivePokemonNameArea = document.querySelector(
    "#pokemon-name-player1"
  ) as HTMLHeadingElement;
  const playerTwoActivePokemonNameArea = document.querySelector(
    "#pokemon-name-player2"
  ) as HTMLHeadingElement;
  const createPokemon = (
    player: Player,
    imageArea: HTMLImageElement,
    nameArea: HTMLHeadingElement
  ) => {
    const pokemonName = player.getActivePokemon.name;
    imageArea.setAttribute("src", `./assets/${pokemonName.toLowerCase()}.png`);
    nameArea.textContent = pokemonName;
  };
  createPokemon(
    gameHandler.playerOne,
    playerOneActivePokemonImageArea,
    playerOneActivePokemonNameArea
  );
  createPokemon(
    gameHandler.playerTwo,
    playerTwoActivePokemonImageArea,
    playerTwoActivePokemonNameArea
  );
};
