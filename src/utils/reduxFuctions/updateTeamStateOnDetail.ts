import { Dispatch } from "redux";
import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes";
import { setPokemonDetail } from "@redux/slices/pokemonDetailSlice";

export const updateTeamStateOnDetail = (pokemon: PokemonWithDetails, showDetail: boolean , dispatch: Dispatch) => {
  
  if(!showDetail) {
    return
  }

  const {team} = pokemon;
  const updatedPokemon = {...pokemon};
  updatedPokemon.team = !team;

  dispatch(setPokemonDetail(updatedPokemon))
}