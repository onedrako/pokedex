import { POKEMON_TYPE_COLOR } from "@customTypes/pokemonCustomTypes"
import { IPokemonType } from "pokeapi-typescript"

export const getGradientByType = (types: IPokemonType[]) => {
  const type1 = types[0].type.name as keyof typeof POKEMON_TYPE_COLOR
  const type2 = types[1] 
    ? types[1].type.name as keyof typeof POKEMON_TYPE_COLOR 
    : types[0].type.name as keyof typeof POKEMON_TYPE_COLOR

  return `linear-gradient(80deg,${POKEMON_TYPE_COLOR[type1]} 0%,${POKEMON_TYPE_COLOR[type2]} 100%)`
}