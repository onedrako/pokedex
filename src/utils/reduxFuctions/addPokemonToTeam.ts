import { Dispatch } from "redux"

import { setMaxPokemonError, setPokemonAlreadyInTeamError } from "@redux/slices/uiErrorSlice"
import { setPokemonsTeam } from "@redux/slices/pokemonSlice"

import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"

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
  if(PokemonListCopy[IndexOfPokemonInList].team){
    setPokemonAlreadyInTeamError(true)
    setTimeout(() => {
      setPokemonAlreadyInTeamError(false)
    }
    , 5000)
    return
  }

  const pokemonToBeAdded: PokemonWithDetails = {...PokemonListCopy[IndexOfPokemonInList]}
  pokemonToBeAdded["team"] = true
  PokemonListCopy[IndexOfPokemonInList] = pokemonToBeAdded

  return dispatch(setPokemonsTeam(PokemonListCopy))
}