import { kindOfMessage, PokemonWithDetails } from "@customTypes/pokemonCustomTypes"
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
  dispatch: AppDispatch,
  kindOfMessage: kindOfMessage
}

export const confirmEliminatePokemonFromTeam = ({
  pokemon, 
  pokemonList, 
  pokemonTeam,
  showDetails,
  dispatch,
  kindOfMessage
}: eliminateProps) => {

  if(kindOfMessage === 'team'){
    removePokemonFromTeamOnList(pokemon, pokemonList, dispatch)
    removePokemonFromTeam(pokemon, pokemonTeam, dispatch)
    updateTeamStateOnDetail(pokemon, showDetails, dispatch)
  }

  if(kindOfMessage === 'detail'){
    removePokemonFromTeamOnList( pokemon, pokemonList, dispatch )
    removePokemonFromTeam( pokemon, pokemonTeam, dispatch )
    updateTeamStateOnDetail(pokemon, showDetails, dispatch, pokemonTeam.length) 
  }

  if(kindOfMessage === 'list'){
    removePokemonFromTeamOnList( pokemon, pokemonList, dispatch )
    removePokemonFromTeam( pokemon, pokemonTeam, dispatch )
  }
  
  // To hide and eliminate message component from DOM
  dispatch(setTriggerMessageAnimation(true))
  setTimeout(() => {
    dispatch(setShowMessage(false))
    dispatch(setTriggerMessageAnimation(false))
  }, 500)
}



export const cancelEliminatePokemonFromTeam = (dispatch: AppDispatch) => {
  dispatch(setTriggerMessageAnimation(true))
  setTimeout(() => {
    dispatch(setShowMessage(false))
    dispatch(setTriggerMessageAnimation(false))
  }, 500)
}