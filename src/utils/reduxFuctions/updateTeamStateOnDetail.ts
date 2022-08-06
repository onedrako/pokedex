import { Dispatch } from "redux";
import { PokemonWithDetails } from "@customTypes/pokemonCustomTypes";
import { setPokemonDetail } from "@redux/slices/pokemonDetailSlice";

export const updateTeamStateOnDetail = (pokemon: PokemonWithDetails, showDetail: boolean , dispatch: Dispatch, pokemonTeamSize?: number ) => {
  if(!showDetail) {
    return
  }

  const {team} = pokemon;
  if(!team && pokemonTeamSize === 6) {
    return
  }

  const updatedPokemon = {...pokemon};
  updatedPokemon.team = !team;

  dispatch(setPokemonDetail(updatedPokemon))
}