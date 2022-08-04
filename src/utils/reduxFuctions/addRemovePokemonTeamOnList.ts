//When I did pagination have to split the list state from the pokemonTeam state, this methods are to update the property team(boolean) from pokemon List 

import { Dispatch } from "redux"

import { setMaxPokemonError } from "@redux/slices/uiErrorSlice"
import { setPokemonsTeamOnList } from "@redux/slices/pokemonSlice"


import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"

// This method verify the number of pokemon and add a pokemon to the team if the number is less or equal than 6,
// have to do a lot of stuff because Pokemon API types are inmutable, so have to pass a new object as a copy of the original 
export const addPokemonToTeamOnList = (newPokemon: PokemonWithDetails, pokemonList: PokemonWithDetails[] , dispatch: Dispatch) => {
  const userTeamLength = pokemonList.filter(pokemon => pokemon.team).length
  if (userTeamLength >= 6) {
    dispatch(setMaxPokemonError(true))
    setTimeout(() => {
      dispatch(setMaxPokemonError(false))
    }, 5000)
    return
  }

  const IndexOfPokemonInList = pokemonList.findIndex(pokemon => pokemon.id === newPokemon.id)  
  const PokemonListCopy = [...pokemonList]

  const pokemonToBeAdded: PokemonWithDetails = {...PokemonListCopy[IndexOfPokemonInList]}
  pokemonToBeAdded["team"] = true
  PokemonListCopy[IndexOfPokemonInList] = pokemonToBeAdded

  // const PokemonTeam = PokemonListCopy.filter(pokemon => pokemon.team)
  // saveTeamToLocalStorage(PokemonTeam)

  return dispatch(setPokemonsTeamOnList(PokemonListCopy))
}


//This method remove a pokemon from the team and save the remain team in local storage
export const removePokemonFromTeamOnList = (pokemonToRemove: PokemonWithDetails, pokemonList: PokemonWithDetails[], dispatch: Dispatch) => {
  const pokemonListCopy = [...pokemonList]
  const pokemonToRemoveIndex = pokemonListCopy.findIndex(pokemon => pokemon.id === pokemonToRemove.id)
  const pokemonToRemoveCopy = {...pokemonListCopy[pokemonToRemoveIndex]}
  pokemonToRemoveCopy["team"] = false
  pokemonListCopy[pokemonToRemoveIndex] = pokemonToRemoveCopy

  // const PokemonTeam = pokemonListCopy.filter(pokemon => pokemon.team)
  // saveTeamToLocalStorage(PokemonTeam)

  return dispatch(setPokemonsTeamOnList(pokemonListCopy))
}

