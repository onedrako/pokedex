import { Dispatch } from "redux"

import { setMaxPokemonError } from "@redux/slices/uiErrorSlice"
import { setPokemonsTeam } from "@redux/slices/pokemonSlice"

import { saveTeamToLocalStorage } from "@utils/manageLocalStorage"

import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"

// This method verify the number of pokemon and add a pokemon to the team if the number is less or equal than 6,
// have to do a lot of stuff because Pokemon API types are inmutable, so have to pass a new object as a copy of the original 
export const addPokemonToTeam = (newPokemon: PokemonWithDetails, pokemonList: PokemonWithDetails[] , dispatch: Dispatch) => {
  const userTeamLength = pokemonList.filter(pokemon => pokemon.team).length
  if (userTeamLength >= 6) {
    console.log("max pokemon error")
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

  const PokemonTeam = PokemonListCopy.filter(pokemon => pokemon.team)
  saveTeamToLocalStorage(PokemonTeam)

  return dispatch(setPokemonsTeam(PokemonListCopy))
}

export const removePokemonFromTeam = (pokemonToRemove: PokemonWithDetails, pokemonList: PokemonWithDetails[], dispatch: Dispatch) => {
  const pokemonListCopy = [...pokemonList]
  const pokemonToRemoveIndex = pokemonListCopy.findIndex(pokemon => pokemon.id === pokemonToRemove.id)
  const pokemonToRemoveCopy = {...pokemonListCopy[pokemonToRemoveIndex]}
  pokemonToRemoveCopy["team"] = false
  pokemonListCopy[pokemonToRemoveIndex] = pokemonToRemoveCopy

  const PokemonTeam = pokemonListCopy.filter(pokemon => pokemon.team)
  saveTeamToLocalStorage(PokemonTeam)

  return dispatch(setPokemonsTeam(pokemonListCopy))
}

