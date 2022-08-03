import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "index"
import { IPokemon } from "pokeapi-typescript"
import { setMaxPokemonError, setPokemonAlreadyInTeamError } from "@redux/slices/uiErrorSlice"
import { setPokemonsTeam } from "@redux/slices/pokemonSlice"
import { Dispatch } from "redux"
import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"

export const addPokemonToTeam = (newPokemon: PokemonWithDetails, pokemonTeam: PokemonWithDetails[] , dispatch: Dispatch) => {

  if (pokemonTeam.length === 0) {
    dispatch(setPokemonsTeam([newPokemon]))
    return console.log(newPokemon)
  }

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

  return dispatch(setPokemonsTeam([newPokemon]))
}