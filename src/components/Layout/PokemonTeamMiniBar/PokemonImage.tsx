// Libraries
import React from 'react'

//Utils
import { getGradientByType } from '@utils/getGradientByType'

//Styles
import { PokemonTeamSprite } from '@styles/Layout/PokemonTeamMiniBar/PokemonTeamMiniBar'

//Types TS
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const PokemonImage = ({pokemon}: {pokemon:PokemonWithDetails}) => {
  if(!pokemon.name) {
    return(
    <PokemonTeamSprite >
      <img src={"https://i.imgur.com/XzODe9l.png"} alt={`pokeball image`} className="pokeball"  />
    </PokemonTeamSprite>
    )
  }

  const gradient = getGradientByType(pokemon.types)
  return (
    <PokemonTeamSprite gradient={gradient} >
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name} image`}  />
    </PokemonTeamSprite>
  )
}

export {PokemonImage}