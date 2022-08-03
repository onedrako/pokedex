import { Dispatch } from "redux"

import { setMaxPokemonError, setPokemonAlreadyInTeamError } from "@redux/slices/uiErrorSlice"
import { setPokemonsTeam } from "@redux/slices/pokemonSlice"

import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"

export const addPokemonToTeam = (newPokemon: PokemonWithDetails, pokemonTeam: PokemonWithDetails[] , dispatch: Dispatch) => {

  if (pokemonTeam.length >= 6) {
    console.log("max pokemon error")
    dispatch(setMaxPokemonError(true))
    setTimeout(() => {
      dispatch(setMaxPokemonError(false))
    }, 5000)
    return
  }

  if(pokemonTeam.find( (pokemon: PokemonWithDetails) => pokemon.id === newPokemon.id)) {
    setPokemonAlreadyInTeamError(true)
    setTimeout(() => {
      setPokemonAlreadyInTeamError(false)
    }
    , 5000)
    return
  }
  const pokemonToBeAdded: PokemonWithDetails = {...newPokemon}
  pokemonToBeAdded["team"] = true 

  return dispatch(setPokemonsTeam([pokemonToBeAdded]))
}