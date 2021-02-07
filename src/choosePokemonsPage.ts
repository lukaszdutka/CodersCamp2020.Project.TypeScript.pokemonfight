import { Pokemon } from "./pokemonClass";
import { PokemonFactory } from "./pokemonFactory";
import { PokemonType } from "./pokemonClass";
import * as data from "./../assets/poke_data.json";
import { Player } from "./playerClass";

const renderActivePlayerName = (activePlayer: Player) => {
    let whoChoosesPokemonText = document.querySelector('#whoChoosesParagraph')!;
    activePlayer.pokemons.length === 3 ? whoChoosesPokemonText.textContent = 'Wait for the game to start...' : whoChoosesPokemonText.textContent = `${activePlayer.name} chooses 1 pokemon`;
}

const renderPlayerNames = (playerOne: Player, playerTwo: Player) => {
    let playerOneNameAreaText = document.querySelector('#choosePagePlayer1Name')!;
    playerOneNameAreaText.textContent = playerOne.name;
    let playerTwoNameAreaText = document.querySelector('#choosePagePlayer2Name')!;
    playerTwoNameAreaText.textContent = playerTwo.name;
}

const renderPokeballs = (playerOne: Player, playerTwo: Player) => {
    
}

const renderPokemonsToChooseFrom = (playerOne: Player, playerTwo: Player, activePlayer: Player) => {

    const pokeData = data.pokemons;
    const pokemonFactory = new PokemonFactory(pokeData);
    const pokemonImages = Array.from(document.querySelectorAll('#pokemonList img')) as [HTMLImageElement];
    
    pokemonImages.forEach(pokemonImage => pokemonImage.addEventListener('click', (e) => {
        if (activePlayer.pokemons.length > 2) return
        const pokemonName = (e.target as HTMLImageElement).id;
        const newPokemonObject: Pokemon = pokemonFactory.getPokemonByName(pokemonName);
        activePlayer.addPokemon(newPokemonObject);
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
        renderActivePlayerName(activePlayer);
        (e.target as HTMLImageElement).style.cursor = 'default';
        (e.target as HTMLImageElement).style.filter = 'grayscale(100%)';
        console.log(playerOne, playerTwo);
        }, { once: true }
    ));    
};


export const renderChoosePage = (firstPlayer: Player, secondPlayer: Player) => {
    const playerOne: Player = firstPlayer;
    const playerTwo: Player = secondPlayer;
    let activePlayer = playerOne;
    renderPlayerNames(playerOne, playerTwo)
    renderActivePlayerName(activePlayer);
    renderPokemonsToChooseFrom(playerOne, playerTwo, activePlayer);
}






