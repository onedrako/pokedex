import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import { PokemonTeamSprite } from '@styles/Layout/PokemonTeamMiniBar/PokemonTeamMiniBar'
import { getGradientByType } from '@utils/getGradientByType'
import React from 'react'

const PokemonImage = ({pokemon}: {pokemon:PokemonWithDetails}) => {
  if(!pokemon.name) {
    return(
    <PokemonTeamSprite >
      <img src={"https://i.imgur.com/XzODe9l.png"} alt={`pokeball image`} className="pokeball"  />
    </PokemonTeamSprite>
    )
  }

  const gradient = getGradientByType(pokemon.types)
  console.log(gradient)
  return (
    <PokemonTeamSprite gradient={gradient} >
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name} image`}  />
    </PokemonTeamSprite>
  )
}

export {PokemonImage}