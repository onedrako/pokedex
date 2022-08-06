import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes"
import { setShowMessage, setTriggerMessageAnimation } from "@redux/slices/uiSlice"
import { removePokemonFromTeam } from "@utils/reduxFuctions/addRemovePokemonTeam"
import { removePokemonFromTeamOnList } from "@utils/reduxFuctions/addRemovePokemonTeamOnList"
import { updateTeamStateOnDetail } from "@utils/reduxFuctions/updateTeamStateOnDetail"
import { AppDispatch } from "index"


type eliminateProps = {
  pokemon: PokemonWithDetails,
  pokemonList: PokemonWithDetails[],
  pokemonTeam: PokemonWithDetails[],
  showDetails: boolean,
  dispatch: AppDispatch
}

export const eliminatePokemonFromTeam = ({
  pokemon, 
  pokemonList, 
  pokemonTeam,
  showDetails,
  dispatch
}: eliminateProps) => {

  removePokemonFromTeamOnList(pokemon, pokemonList, dispatch)
  removePokemonFromTeam(pokemon, pokemonTeam, dispatch)
  updateTeamStateOnDetail(pokemon, showDetails, dispatch)
  dispatch(setTriggerMessageAnimation(true))
  setTimeout(() => {
    dispatch(setShowMessage(false))
    dispatch(setTriggerMessageAnimation(false))
  }, 500)
}