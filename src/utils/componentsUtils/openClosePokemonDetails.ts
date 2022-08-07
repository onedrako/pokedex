import { setReloadPokedexAnimation, setShowDetails, setShowMessage, setTriggerPokedexAnimation } from "@redux/slices/uiSlice"
import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"
import { AppDispatch } from "index"

import { setPokemonDetail } from "@redux/slices/pokemonDetailSlice"

interface closePokemonDetailProps {
  dispatch: AppDispatch,
  navigate: (route: string) => void,
  route: string,
  reload: boolean
}

interface openPokemonDetailsProps extends closePokemonDetailProps {
  pokemon: PokemonWithDetails,
}

export const openPokemonDetail = ({dispatch, navigate, pokemon, route, reload}: openPokemonDetailsProps) => {

  setTimeout(() => {
    dispatch(setShowDetails(true))
    dispatch(setShowMessage(false))
    navigate(route)
    setTimeout(() => {
      dispatch(setReloadPokedexAnimation(false))
      if (reload){
        return
      }
      dispatch(setTriggerPokedexAnimation(false))
    }, 200)
  }, 360)

  dispatch(setPokemonDetail(pokemon))
  dispatch(setTriggerPokedexAnimation(true))
}

export const closePokemonDetail = ({dispatch, navigate, route, reload}: closePokemonDetailProps) => {

  setTimeout(() => {
    dispatch(setShowDetails(false))
    navigate(route)
    setTimeout(() => {
      dispatch(setReloadPokedexAnimation(false))
      if (reload){
        return
      }
      dispatch(setTriggerPokedexAnimation(false))
    }, 200)
  }, 360)

  dispatch(setTriggerPokedexAnimation(true))
}

