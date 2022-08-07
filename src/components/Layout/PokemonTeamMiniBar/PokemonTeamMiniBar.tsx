import React from 'react'
import { useSelector } from 'react-redux'
import { PokemonTeamMiniBarContainer, PokemonTeamSprite } from '@styles/Layout/PokemonTeamMiniBar/PokemonTeamMiniBar'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'
import {PokemonImage} from './PokemonImage'

const PokemonTeamMiniBar = () => {
  const pokemonTeam: PokemonWithDetails[]  = useSelector((state: any) => state.pokemon.pokemonTeam)
  
  const pokemonBarElements = [...pokemonTeam]

  for (let i = 0; i < 6 - pokemonTeam.length; i++) {
    pokemonBarElements.push({} as PokemonWithDetails)
  }

  return (
    <PokemonTeamMiniBarContainer>
      {pokemonBarElements.map((pokemon: PokemonWithDetails, index) => {
        return (
          <PokemonImage key={`pokemonMiniTeam-${pokemon.name}-${index}`} pokemon={pokemon} />
          )}
      )}
    </PokemonTeamMiniBarContainer>
  )
}

export {PokemonTeamMiniBar}