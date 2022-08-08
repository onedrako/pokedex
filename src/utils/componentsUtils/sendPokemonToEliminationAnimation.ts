import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"
import { setPokemonToEliminateLength, setPokemonToSendToEliminateAnimation } from "@redux/slices/pokemonSlice"
import { AppDispatch } from "index"

export const sendPokemonToSendToEliminateAnimation = (pokemon: PokemonWithDetails, pokemonToSendToEliminateAnimation: PokemonWithDetails[], dispatch: AppDispatch) => {
  
  dispatch(setPokemonToSendToEliminateAnimation([pokemon]))
  dispatch(setPokemonToEliminateLength(pokemonToSendToEliminateAnimation.length + 1))
}
