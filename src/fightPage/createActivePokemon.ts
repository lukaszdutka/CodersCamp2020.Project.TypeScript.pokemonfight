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
    if(player.getActivePokemon.isAlive()){
      const pokemonName = player.getActivePokemon.name;
      imageArea.style.display='block';
      nameArea.style.display='block';
      imageArea.setAttribute("src", `./${pokemonName.toLowerCase()}.png`);
      nameArea.textContent = pokemonName;
    }else{
      imageArea.style.display='none';
      nameArea.style.display='none';
    }
    
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
