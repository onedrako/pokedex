import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"
import { setPokemonDetail } from "@redux/slices/pokemonDetailSlice"
import { setShowDetails, setShowMessage, setTriggerPokedexAnimation } from "@redux/slices/uiSlice"
import { AppDispatch } from "index"

interface closePokemonDetailProps {
  dispatch: AppDispatch,
  navigate: (route: string) => void,
  route: string
}

interface openPokemonDetailsProps extends closePokemonDetailProps {
  pokemon: PokemonWithDetails,
}

export const openPokemonDetail = ({dispatch, navigate, pokemon, route}: openPokemonDetailsProps) => {
  setTimeout(() => {
    dispatch(setShowDetails(true))
    dispatch(setShowMessage(false))
    navigate(route)
    setTimeout(() => {
      dispatch(setTriggerPokedexAnimation(false))
    }, 200)
  }, 380)
  dispatch(setPokemonDetail(pokemon))
  dispatch(setTriggerPokedexAnimation(true))
}

export const closePokemonDetail = ({dispatch, navigate, route}: closePokemonDetailProps) => {
  setTimeout(() => {
    dispatch(setShowDetails(false))
    navigate(route)
    setTimeout(() => {
      dispatch(setTriggerPokedexAnimation(false))
    }, 200)
  }, 380)
  dispatch(setTriggerPokedexAnimation(true))
}

