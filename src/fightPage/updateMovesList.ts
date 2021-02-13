import { GameHandler } from "../gameHandlerClass";
import { attack, switchPoke, eatMango } from "./buttonsEventListeners";

export const updateMovesList = (
  gameHandler: GameHandler,
  calledFunction: any,
  event: Event
) => {
  const moveList = document.querySelector(".gameLogs")!;
  const newMove = document.createElement("p");
  let newMoveText = document.createTextNode("No move found");
  const pokemonName = gameHandler.currentPlayer.getActivePokemon.name;
  const buttonContent = (event.currentTarget as HTMLDivElement).textContent;
  const playerName = gameHandler.currentPlayer.name;
  const opponentPlayerPokemonName = gameHandler.opponentPlayer.getActivePokemon.name;
  switch (calledFunction) {
    case attack:
      newMoveText.nodeValue = `${playerName}: ${pokemonName} used ${buttonContent}!`;
      if (!gameHandler.opponentPlayer.getActivePokemon.isAlive()) {
      newMoveText.nodeValue += ` ${opponentPlayerPokemonName} is defeated!`;
      }
      break;
    case switchPoke:
      newMoveText.nodeValue = `${playerName} changed Pokemon: ${pokemonName} comes into play!`;
      break;
    case eatMango:
      newMoveText.nodeValue = `${playerName} used mango: ${pokemonName} is healed!`;
      break;
    default:
      console.log("No move found");
  }
  newMove.append(newMoveText);
  moveList.insertBefore(newMove, moveList.firstChild);
};
