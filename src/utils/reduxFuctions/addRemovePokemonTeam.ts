import { saveTeamToLocalStorage } from "@utils/manageLocalStorage"

import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"
import { setMaxPokemonError, setPokemonAlreadyInTeamError } from "@redux/slices/uiErrorSlice"
import { setPokemonTeam } from "@redux/slices/pokemonSlice"
import { Dispatch } from "redux"

export const addPokemonToTeam = (newPokemon: PokemonWithDetails, pokemonTeam: PokemonWithDetails[] , dispatch: Dispatch) => {  

  if (pokemonTeam.length >= 6) {
    dispatch(setMaxPokemonError(true))
    setTimeout(() => {
      dispatch(setMaxPokemonError(false))
    }, 9000)
    return
  }
  const pokemonToBeAdded: PokemonWithDetails = {...newPokemon}
  pokemonToBeAdded["team"] = true 
  const pokemonTeamCopy = [...pokemonTeam]
  pokemonTeamCopy.push(pokemonToBeAdded)

  saveTeamToLocalStorage(pokemonTeamCopy)

  return dispatch(setPokemonTeam(pokemonTeamCopy))
}

export const removePokemonFromTeam = (pokemonToRemove: PokemonWithDetails, pokemonTeam: PokemonWithDetails[], dispatch: Dispatch) => {
  const pokemonTeamWithouthPokemonToRemove = pokemonTeam.filter(pokemon => pokemon.id !== pokemonToRemove.id)
  saveTeamToLocalStorage(pokemonTeamWithouthPokemonToRemove)

  return dispatch(setPokemonTeam(pokemonTeamWithouthPokemonToRemove))
}