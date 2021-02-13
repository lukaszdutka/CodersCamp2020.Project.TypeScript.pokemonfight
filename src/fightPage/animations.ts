import { GameHandler } from "../gameHandlerClass";

const selectPokemonImage = () => {
  return [
     document.getElementById("pokemon-image-player1") as HTMLImageElement, 
     document.getElementById("pokemon-image-player2") as HTMLImageElement,
     document.querySelector(".boom-player1") as HTMLDivElement,
     document.querySelector(".boom-player2") as HTMLDivElement,
     document.querySelector(".animation-div-player1") as HTMLDivElement,
     document.querySelector(".animation-div-player2") as HTMLDivElement
   ];
}

export const animationShowCurrentPokemon = (gameHandler: GameHandler) => {
 const pokemonImage = selectPokemonImage();
 if(gameHandler.playerOne.name === gameHandler.currentPlayer.name) {
   //Active Player 1
   pokemonImage[0].style.backgroundColor = "green";
   pokemonImage[1].style.backgroundColor = "transparent";
 } else {
   //Active Player 2
   pokemonImage[0].style.backgroundColor = "transparent";
   pokemonImage[1].style.backgroundColor = "green";
 }
} 

export const animationHittedPokemon = (gameHandler: GameHandler) => {
 const pokemonImage = selectPokemonImage();
 if(gameHandler.playerOne.name === gameHandler.currentPlayer.name) {
   pokemonImage[3].style.display = "block";
   setTimeout(()=>{
     pokemonImage[3].style.display = "none";
     pokemonImage[1].style.animation = "jello-horizontal 0.7s both";
     pokemonImage[1].style.animationDelay = "0.2s";
   }, 500);
 } else {
   pokemonImage[2].style.display = "block";
   setTimeout(()=>{
     pokemonImage[2].style.display = "none";
     pokemonImage[0].style.animation = "jello-horizontal 0.7s both";
     pokemonImage[0].style.animationDelay = "0.2s";
   }, 500);
 }
 setTimeout(() => {
   pokemonImage[0].style.animation = "none";
   pokemonImage[1].style.animation = "none";
 }, 1500)
}

export const animationSwitchPokemon = (gameHandler: GameHandler) => {
 const pokemonImage = selectPokemonImage();
 pokemonImage[0].style.filter = "none";
 pokemonImage[1].style.filter = "none";
 if(gameHandler.playerOne.name === gameHandler.currentPlayer.name) {
    pokemonImage[0].style.animation = "bounce-in-fwd 1s both";
 } else {
    pokemonImage[1].style.animation = "bounce-in-fwd 1s both";
 }
 setTimeout(() => {
  pokemonImage[0].style.animation = "none";
  pokemonImage[1].style.animation = "none";
}, 1000)
}

export const animationEatMango = (gameHandler: GameHandler) => {
  const pokemonImage = selectPokemonImage();
  if(gameHandler.playerOne.name === gameHandler.currentPlayer.name) {
    pokemonImage[4].style.display = "block";
    setTimeout(() => {
      pokemonImage[4].style.display = "none";
    },1500);
  } else {
    pokemonImage[5].style.display = "block";
    setTimeout(() => {
      pokemonImage[5].style.display = "none";
    },1500);
  }
 }

 export const animationDead = (gameHandler: GameHandler) => {
  const pokemonImage = selectPokemonImage();
  console.log("animation dead");
  if(gameHandler.playerOne.name === gameHandler.currentPlayer.name) {
    pokemonImage[0].style.filter = "grayscale(100%)";
  } else {
    pokemonImage[1].style.filter = "grayscale(100%)";
  }
 }