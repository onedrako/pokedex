import { POKEMON_STATS } from "@customTypes/pokemonCustomTypes"
import { IPokemonStat } from "pokeapi-typescript"

export const getStatName = (stat: IPokemonStat) => {
  if(stat.stat.name === 'special-defense') {
    return  POKEMON_STATS.sD
  }
  if(stat.stat.name === 'special-attack') {
    return POKEMON_STATS.sA
  }
  return POKEMON_STATS[stat.stat.name as keyof typeof POKEMON_STATS]
}